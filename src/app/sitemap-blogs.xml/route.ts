import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3patti-loot.com.pk';
  const currentDate = new Date().toISOString();

  const blogPosts = [
    {
      url: `${baseUrl}/blog`,
      lastMod: currentDate,
      changeFreq: 'weekly',
      priority: '0.8',
      title: '3 Patti Loot Blog – Gaming News and Guides',
    },
    {
      url: `${baseUrl}/blog/is-3patti-loot-real-or-fake`,
      lastMod: '2026-01-03T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'Is 3 Patti Loot Real or Fake to Earn Money? Complete Guide 2026',
    },
    {
      url: `${baseUrl}/blog/how-to-play-3patti-loot`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'How to Play 3 Patti Loot – Complete Beginner Guide 2026',
    },
    {
      url: `${baseUrl}/blog/tips-to-win-3patti-loot`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'Tips and Strategies to Win in 3 Patti Loot – Expert Guide 2026',
    },
    {
      url: `${baseUrl}/blog/how-to-earn-money-3patti-loot`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'How to Earn Money in 3 Patti Loot – Complete Earning Guide 2026',
    },
    {
      url: `${baseUrl}/blog/payment-methods-jazzcash-easypaisa`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: '3 Patti Loot Payment Methods – JazzCash and EasyPaisa Guide 2026',
    },
    {
      url: `${baseUrl}/blog/3patti-loot-features-benefits`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: '3 Patti Loot App Features and Benefits – Complete Guide 2026',
    },
    {
      url: `${baseUrl}/blog/how-to-create-account-login`,
      lastMod: '2026-01-05T00:00:00+00:00',
      changeFreq: 'monthly',
      priority: '0.8',
      title: 'How to Create Account and Login in 3 Patti Loot – Step by Step Guide 2026',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${blogPosts.map(post => `  <url>
    <loc>${post.url}</loc>
    <lastmod>${post.lastMod}</lastmod>
    <changefreq>${post.changeFreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
