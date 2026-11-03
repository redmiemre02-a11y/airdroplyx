import { newsArticles } from '../data/news';

export async function GET() {
  // Take the most recent 50 articles (articles are prepended, so index 0 is newest)
  const sortedArticles = newsArticles.slice(0, 50);

  const urlEntries = sortedArticles.map(article => {
    const parsed = new Date(article.date);
    const pubDate = !isNaN(parsed.getTime()) ? parsed.toISOString() : new Date().toISOString();
    
    // Safely escape XML special characters
    const safeTitle = article.title
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
      
    const safeImage = article.image
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

    return `  <url>
    <loc>https://airdroplyx.com/news/${article.slug}/</loc>
    <news:news>
      <news:publication>
        <news:name>Airdroplyx News</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${safeTitle}</news:title>
    </news:news>
    <image:image>
      <image:loc>${safeImage}</image:loc>
      <image:title>${safeTitle}</image:title>
    </image:image>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
