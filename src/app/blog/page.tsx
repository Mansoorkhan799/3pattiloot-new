import { Metadata } from 'next';
import BlogSearch from './BlogSearch';

export const metadata: Metadata = {
  title: '3 Patti Loot Blog – Tips, Guides & Strategies 2026',
  description: 'Discover the truth about 3 Patti Loot legitimacy, payment methods, and how to identify fake apps. Complete earning guide for Pakistani players.',
  keywords: ['3 Patti Loot blog', '3 Patti Loot real or fake', '3 Patti Loot legit', '3 Patti Loot Pakistan', '3 Patti Loot earning guide', '3 Patti Loot withdrawal'],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://3patti-loot.com.pk/blog' },
  openGraph: {
    title: '3 Patti Loot Blog – Tips, Guides & Strategies 2026',
    description: 'Expert guides, tips, and strategies to help you earn more on 3 Patti Loot. Read all articles.',
    url: 'https://3patti-loot.com.pk/blog',
    siteName: '3 Patti Loot',
    type: 'website',
    images: [{ url: 'https://3patti-loot.com.pk/teen-patti-loot.webp', width: 1200, height: 630, alt: '3 Patti Loot Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti Loot Blog – Tips, Guides & Strategies 2026',
    description: 'Expert guides, tips, and strategies to help you earn more on 3 Patti Loot.',
    images: ['https://3patti-loot.com.pk/teen-patti-loot.webp'],
  },
};

const BLOG_POSTS = [
  {
    slug: 'is-3patti-loot-real-or-fake',
    title: 'Is 3 Patti Loot Real or Fake to Earn Money?',
    description: 'Discover the truth about 3 Patti Loot legitimacy, payment methods, and how to identify fake apps. Complete guide for 2026.',
    date: 'January 2026',
    readTime: '7 min read',
    featured: true,
    image: '/teen-patti-loot-game.webp',
    category: 'Guide',
  },
  {
    slug: 'how-to-play-3patti-loot',
    title: 'How to Play 3 Patti Loot - Complete Beginner Guide',
    description: 'Learn how to play 3 Patti Loot step by step. Complete beginner guide with rules, gameplay, tips, and strategies for Teen Patti and more.',
    date: 'January 2026',
    readTime: '8 min read',
    featured: false,
    image: '/teen-patti-loot.webp',
    category: 'Beginner',
  },
  {
    slug: 'tips-to-win-3patti-loot',
    title: 'Tips and Strategies to Win in 3 Patti Loot',
    description: 'Learn proven tips and strategies to win in 3 Patti Loot. Expert guide on Teen Patti strategies, bankroll management, and winning techniques.',
    date: 'January 2026',
    readTime: '9 min read',
    featured: false,
    image: '/teen-patti-loot-game.webp',
    category: 'Strategy',
  },
  {
    slug: 'how-to-earn-money-3patti-loot',
    title: 'How to Earn Money in 3 Patti Loot',
    description: 'Learn how to earn real money in 3 Patti Loot. Complete guide on earning methods, bonuses, referral program, and withdrawal process.',
    date: 'January 2026',
    readTime: '10 min read',
    featured: false,
    image: '/teen-patti-loot-refer-and-earn.webp',
    category: 'Earning',
  },
  {
    slug: 'payment-methods-jazzcash-easypaisa',
    title: '3 Patti Loot Payment Methods - JazzCash & EasyPaisa',
    description: 'Complete guide on using JazzCash and EasyPaisa for deposits and withdrawals in 3 Patti Loot. Step-by-step instructions for Pakistani players.',
    date: 'January 2026',
    readTime: '7 min read',
    featured: false,
    image: '/teen-patti-loot-deposit-money.webp',
    category: 'Payments',
  },
  {
    slug: '3patti-loot-features-benefits',
    title: '3 Patti Loot App Features and Benefits',
    description: 'Discover all the amazing features and benefits of 3 Patti Loot app. Learn about games, bonuses, security, and why it\'s the best platform.',
    date: 'January 2026',
    readTime: '8 min read',
    featured: false,
    image: '/teen-patti-loot.webp',
    category: 'Features',
  },
  {
    slug: 'how-to-create-account-login',
    title: 'How to Create Account and Login in 3 Patti Loot',
    description: 'Complete step-by-step guide on creating an account and logging in to 3 Patti Loot. Learn registration, verification, and login process.',
    date: 'January 2026',
    readTime: '6 min read',
    featured: false,
    image: '/teen-patti-loot-bind-mail.webp',
    category: 'Account',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://3patti-loot.com.pk/blog" }] }) }} />
      {/* Hero */}
      <section className="relative py-14 md:py-20 bg-secondary border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFA500]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            📚 {BLOG_POSTS.length} Articles &amp; Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">3 Patti Loot Blog</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Expert guides, tips, and strategies to help you earn more on 3 Patti Loot.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <BlogSearch posts={BLOG_POSTS} />
      </section>
    </div>
  );
}
