import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3patti-loot.com.pk';

  const images = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: '3 Patti Loot Logo',
          caption: '3 Patti Loot – Pakistan Trusted Card Gaming Platform',
        },
        {
          loc: `${baseUrl}/teen-patti-loot.webp`,
          title: '3Patti Loot App – Pakistan\'s #1 Online Card Game',
          caption: '3 Patti Loot App Overview',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-game.webp`,
          title: '3Patti Loot Game Interface – Play Teen Patti Online',
          caption: '3 Patti Loot Game Interface',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-apk-pakistan.webp`,
          title: '3Patti Loot APK Download for Android in Pakistan',
          caption: '3 Patti Loot APK Download Pakistan',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-deposit-money.webp`,
          title: '3Patti Loot Deposit Money via JazzCash & EasyPaisa',
          caption: '3 Patti Loot Deposit Money System',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-withdraw-money.webp`,
          title: '3Patti Loot Withdraw Money – Fast Withdrawal to JazzCash',
          caption: '3 Patti Loot Withdraw Money',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-refer-and-earn.webp`,
          title: '3Patti Loot Refer & Earn – Invite Friends & Win Bonus',
          caption: '3 Patti Loot Referral Program',
        },
        {
          loc: `${baseUrl}/teen-patti-loot-bind-mail.webp`,
          title: '3Patti Loot Bind Email – Secure Your Account',
          caption: '3 Patti Loot Account Security',
        },
      ],
    },
    {
      loc: `${baseUrl}/deposit-money-in-3patti-loot`,
      images: [
        {
          loc: `${baseUrl}/teen-patti-loot-deposit-money.webp`,
          title: '3 Patti Loot Deposit Guide',
          caption: 'How to Deposit Money in 3 Patti Loot',
        },
      ],
    },
    {
      loc: `${baseUrl}/withdraw-money-from-3patti-loot`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: '3 Patti Loot Withdrawal Guide',
          caption: 'How to Withdraw Money from 3 Patti Loot',
        },
      ],
    },
    {
      loc: `${baseUrl}/3patti-loot-for-pc`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: '3 Patti Loot for PC',
          caption: 'Download 3 Patti Loot for PC with Emulator',
        },
      ],
    },
    {
      loc: `${baseUrl}/about-us`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: '3 Patti Loot About Us',
          caption: 'About 3 Patti Loot Gaming Platform',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: '3 Patti Loot Blog',
          caption: '3 Patti Loot Gaming News and Guides',
        },
      ],
    },
    {
      loc: `${baseUrl}/blog/is-3patti-loot-real-or-fake`,
      images: [
        {
          loc: `${baseUrl}/3-patti-loot.webp`,
          title: 'Is 3 Patti Loot Real or Fake',
          caption: 'Complete Guide: 3 Patti Loot Legitimacy Review',
        },
      ],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${page.loc}</loc>
${page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
