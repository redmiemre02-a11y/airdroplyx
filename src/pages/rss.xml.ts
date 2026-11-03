import { airdrops } from '../data/airdrops';
import { newsArticles } from '../data/news';

export async function GET() {
  // Combine latest 35 news articles + latest 25 airdrops for a rich 60-item universal feed
  const recentNews = newsArticles.slice(0, 35).map(n => {
    const parsed = new Date(n.date);
    const dateObj = !isNaN(parsed.getTime()) ? parsed : new Date();
    
    const safeImageUrl = n.image.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const safeCategory = n.category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return {
      type: 'news',
      title: n.title,
      link: `https://airdroplyx.com/news/${n.slug}/`,
      guid: `https://airdroplyx.com/news/${n.slug}/`,
      pubDate: dateObj.toUTCString(),
      timestamp: dateObj.getTime(),
      category: safeCategory,
      author: n.author,
      description: n.excerpt,
      contentHtml: `<p><img src="${safeImageUrl}" alt="${n.title.replace(/"/g, '')}" width="1200" height="675" /></p><p>${n.excerpt}</p>`,
      imageUrl: safeImageUrl
    };
  });

  // Recent airdrops are at the end of the airdrops array
  const recentAirdrops = airdrops.slice(-25).reverse().map(a => {
    const safeLogo = a.logo.startsWith('http') ? a.logo : `https://airdroplyx.com${a.logo}`;
    const safeLogoXml = safeLogo.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const safeCategory = a.category.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const dateObj = new Date('2026-11-03T08:00:00Z');

    return {
      type: 'airdrop',
      title: `${a.name} - Verified Airdrop Guide & Strategy`,
      link: `https://airdroplyx.com/airdrop/${a.id}/`,
      guid: `https://airdroplyx.com/airdrop/${a.id}/`,
      pubDate: dateObj.toUTCString(),
      timestamp: dateObj.getTime(),
      category: safeCategory,
      author: 'Airdroplyx Research Team',
      description: `${a.description} Expected Reward: ${a.reward}. Total Funding: ${a.funding}. Category: ${a.category}.`,
      contentHtml: `<p><img src="${safeLogoXml}" alt="${a.name.replace(/"/g, '')}" width="256" height="256" /></p><p><strong>Reward:</strong> ${a.reward} | <strong>Funding:</strong> ${a.funding}</p><p>${a.overview || a.description}</p>`,
      imageUrl: safeLogoXml
    };
  });

  // Interleave / sort so news and airdrops are in pristine chronological order
  const allItems = [...recentNews, ...recentAirdrops].sort((a, b) => b.timestamp - a.timestamp);

  const itemsXml = allItems.map(item => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <description><![CDATA[${item.description}]]></description>
      <content:encoded><![CDATA[${item.contentHtml}]]></content:encoded>
      <dc:creator><![CDATA[${item.author}]]></dc:creator>
      <category>${item.category}</category>
      <pubDate>${item.pubDate}</pubDate>
      <enclosure url="${item.imageUrl}" length="120000" type="image/jpeg" />
      <media:content url="${item.imageUrl}" medium="image">
        <media:title><![CDATA[${item.title}]]></media:title>
      </media:content>
    </item>`).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Airdroplyx - Verified Crypto Airdrops, Intelligence &amp; Breaking News</title>
    <link>https://airdroplyx.com/</link>
    <description>The premier cryptocurrency airdrop aggregator, tracking 870+ verified airdrops, testnet incentives, tokenomics analysis, and institutional Web3 news.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://airdroplyx.com/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
