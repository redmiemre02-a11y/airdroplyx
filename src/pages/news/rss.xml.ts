import { newsArticles } from '../../data/news';

export async function GET() {
  // Take the most recent 50 articles in chronological order (newest first)
  const sortedNews = newsArticles.slice(0, 50);

  const items = sortedNews.map(n => {
    const parsed = new Date(n.date);
    const pubDate = !isNaN(parsed.getTime()) ? parsed.toUTCString() : new Date().toUTCString();
    
    // Format paragraph content for RSS readers and Google News ingestion
    const htmlContent = n.content
      .split('\n\n')
      .map(p => {
        const trimmed = p.trim();
        if (trimmed.startsWith('## ')) {
          return `<h3>${trimmed.substring(3)}</h3>`;
        }
        if (trimmed.startsWith('> ')) {
          return `<blockquote><p>${trimmed.substring(2)}</p></blockquote>`;
        }
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const listItems = trimmed.split('\n').map(li => `<li>${li.replace(/^[\*\-]\s+/, '')}</li>`).join('');
          return `<ul>${listItems}</ul>`;
        }
        return `<p>${trimmed}</p>`;
      })
      .join('\n')
      .replace(/]]>/g, ']]&gt;');

    // Safely escape attribute strings
    const safeImageUrl = n.image.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const safeCategory = n.category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `    <item>
      <title><![CDATA[${n.title}]]></title>
      <link>https://airdroplyx.com/news/${n.slug}/</link>
      <guid isPermaLink="true">https://airdroplyx.com/news/${n.slug}/</guid>
      <description><![CDATA[${n.excerpt}]]></description>
      <content:encoded><![CDATA[
        <p><img src="${safeImageUrl}" alt="${n.title.replace(/"/g, '')}" width="1200" height="675" /></p>
        <p><strong>${n.excerpt}</strong></p>
        ${htmlContent}
      ]]></content:encoded>
      <dc:creator><![CDATA[${n.author}]]></dc:creator>
      <category>${safeCategory}</category>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${safeImageUrl}" length="120000" type="image/jpeg" />
      <media:content url="${safeImageUrl}" medium="image" width="1200" height="675">
        <media:title><![CDATA[${n.title}]]></media:title>
      </media:content>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Airdroplyx News - Google News Compliant Web3 Airdrop Alpha</title>
    <link>https://airdroplyx.com/news/</link>
    <description>Breaking cryptocurrency airdrop news, verified testnet alerts, and institutional on-chain intel published to Google News journalistic standards.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://airdroplyx.com/news/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
