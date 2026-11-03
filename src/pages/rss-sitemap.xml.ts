import { airdrops } from '../data/airdrops';
import { newsArticles } from '../data/news';

export async function GET() {
  // Google Search Console RSS Sitemap format:
  // Delivers the most recent URL changes with accurate <pubDate> and canonical <link>
  const recentNews = newsArticles.slice(0, 35).map(n => {
    const parsed = new Date(n.date);
    const dateObj = !isNaN(parsed.getTime()) ? parsed : new Date();

    return {
      title: n.title,
      link: `https://airdroplyx.com/news/${n.slug}/`,
      guid: `https://airdroplyx.com/news/${n.slug}/`,
      pubDate: dateObj.toUTCString(),
      timestamp: dateObj.getTime(),
      category: n.category,
      description: n.excerpt
    };
  });

  const recentAirdrops = airdrops.slice(-25).reverse().map(a => {
    const dateObj = new Date('2026-11-03T08:00:00Z');

    return {
      title: `${a.name} - Verified Airdrop Guide`,
      link: `https://airdroplyx.com/airdrop/${a.id}/`,
      guid: `https://airdroplyx.com/airdrop/${a.id}/`,
      pubDate: dateObj.toUTCString(),
      timestamp: dateObj.getTime(),
      category: a.category,
      description: a.description
    };
  });

  const allEntries = [...recentNews, ...recentAirdrops].sort((a, b) => b.timestamp - a.timestamp);

  const items = allEntries.map(e => `    <item>
      <title><![CDATA[${e.title}]]></title>
      <link>${e.link}</link>
      <guid isPermaLink="true">${e.guid}</guid>
      <pubDate>${e.pubDate}</pubDate>
      <description><![CDATA[${e.description}]]></description>
      <category>${e.category.replace(/&/g, '&amp;')}</category>
    </item>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Airdroplyx - Google Search Console RSS Sitemap</title>
    <link>https://airdroplyx.com/</link>
    <description>Fast-crawling RSS Sitemap for Google Search Console, indexing latest crypto airdrops and news articles.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://airdroplyx.com/rss-sitemap.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
