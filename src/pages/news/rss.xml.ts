import { newsArticles } from '../../data/news';

export async function GET() {
  const items = newsArticles.map(n => {
    const parsed = new Date(n.date);
    const pubDate = !isNaN(parsed.getTime()) ? parsed.toUTCString() : new Date().toUTCString();
    
    // Format paragraph content for RSS readers and Google News ingestion
    const htmlContent = n.content.split('\n\n').map(p => `<p>${p}</p>`).join('');

    return `
    <item>
      <title><![CDATA[${n.title}]]></title>
      <link>https://airdroplyx.com/news/${n.slug}/</link>
      <guid isPermaLink="true">https://airdroplyx.com/news/${n.slug}/</guid>
      <description><![CDATA[${n.excerpt}]]></description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      <dc:creator><![CDATA[${n.author}]]></dc:creator>
      <category>${n.category}</category>
      <pubDate>${pubDate}</pubDate>
      <media:content url="${n.image}" medium="image" width="1200" height="675">
        <media:title><![CDATA[${n.title}]]></media:title>
      </media:content>
    </item>`;
  }).join('');

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
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
