import { newsArticles } from '../../data/news';

export async function GET() {
  const items = newsArticles.map(n => `
    <item>
      <title><![CDATA[${n.title}]]></title>
      <link>https://airdroplyx.com/news/${n.slug}/</link>
      <guid isPermaLink="true">https://airdroplyx.com/news/${n.slug}/</guid>
      <description><![CDATA[${n.excerpt}]]></description>
      <category>${n.category}</category>
      <pubDate>${new Date(n.date).toUTCString()}</pubDate>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Airdroplyx News - Daily Web3 Airdrop Alpha &amp; TGE Radar</title>
    <link>https://airdroplyx.com/news/</link>
    <description>Breaking cryptocurrency airdrop news, confirmed snapshot alerts, and institutional on-chain intel.</description>
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
