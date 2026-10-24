import { airdrops } from '../data/airdrops';

export async function GET() {
  const items = airdrops.slice(0, 50).map(a => `
    <item>
      <title><![CDATA[${a.name} Airdrop Guide]]></title>
      <link>https://airdroplyx.com/airdrop/${a.id}/</link>
      <guid isPermaLink="true">https://airdroplyx.com/airdrop/${a.id}/</guid>
      <description><![CDATA[${a.description} Expected Reward: ${a.reward}. Total Funding: ${a.funding}. Category: ${a.category}.]]></description>
      <category>${a.category}</category>
      <pubDate>${new Date(a.publishDate || '2026-10-01').toUTCString()}</pubDate>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Airdroplyx - Verified Crypto Airdrops &amp; Guides</title>
    <link>https://airdroplyx.com/</link>
    <description>Your trusted source for verified cryptocurrency airdrops, testnet incentives, and Web3 yield strategies.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://airdroplyx.com/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
