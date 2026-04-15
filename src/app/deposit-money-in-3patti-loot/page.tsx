import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const APP_URL = 'https://3pattilootpkk1.com/?from_gameid=5208127&channelCode=200000';

export const metadata: Metadata = {
  title: 'How to Deposit Money in 3 Patti Loot | Safe Payment Guide',
  description: 'Learn how to deposit money in 3 Patti Loot using JazzCash and EasyPaisa. Follow our step-by-step guide for quick, safe, and secure deposits.',
  keywords: 'deposit money 3patti loot, 3patti loot payment methods, jazzcash deposit, easypaisa deposit, add funds 3patti loot, 3patti loot recharge',
  openGraph: {
    title: 'How to Deposit Money in 3 Patti Loot | Safe Payment Guide',
    description: 'Step-by-step guide to deposit money in 3 Patti Loot using JazzCash and EasyPaisa.',
    url: 'https://3patti-loot.com.pk/deposit-money-in-3patti-loot',
    siteName: '3 Patti Loot',
    type: 'article',
    images: [{ url: 'https://3patti-loot.com.pk/teen-patti-loot-deposit-money.webp', width: 1200, height: 630, alt: '3 Patti Loot Deposit Money Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in 3 Patti Loot | Safe Payment Guide',
    description: 'Learn how to deposit money in 3 Patti Loot using JazzCash and EasyPaisa with our complete guide.',
    images: ['https://3patti-loot.com.pk/teen-patti-loot-deposit-money.webp'],
  },
  alternates: { canonical: 'https://3patti-loot.com.pk/deposit-money-in-3patti-loot' },
};

const STEPS = [
  { title: 'Open 3 Patti Loot App', desc: 'Open the app on your Android device. Ensure a stable internet connection and log in with your registered phone number and password.' },
  { title: 'Click on Shop Option', desc: 'After logging in your dashboard will appear showing games and options. Tap the Shop button to begin the deposit process.' },
  { title: 'Select Payment Method', desc: 'The deposit page shows available payment options. Choose JazzCash or EasyPaisa — whichever you can use most conveniently.' },
  { title: 'Choose Amount', desc: 'Pick the amount you wish to deposit. Available options include Rs 200, Rs 500, Rs 1,000, or Rs 2,000.' },
  { title: 'Click on Add Chips', desc: 'Tap Add Chips, then enter your mobile wallet account number on the payment page and hit Submit.' },
  { title: 'Approve Payment Request', desc: 'Log in to your JazzCash or EasyPaisa account and approve the payment request received from 3 Patti Loot.' },
  { title: 'Funds Added Instantly', desc: 'Once approved, chips are added to your account immediately. In rare cases network delays may cause a short wait.' },
];

const TIPS = [
  { icon: '🔒', text: 'Use only your own mobile wallet to add funds.' },
  { icon: '📶', text: 'Keep a strong internet connection during deposit.' },
  { icon: '🤫', text: 'Never share your wallet PIN or login password with anyone.' },
  { icon: '💡', text: 'Start with a small amount if you are a new player.' },
  { icon: '🎮', text: 'Play wisely and manage your bankroll carefully.' },
];

const FAQS = [
  { q: 'How can I add money to my 3 Patti Loot account?', a: 'Open the app, go to Shop, select a payment method, choose the amount, click Add Chips, enter your account number, and approve the payment request.' },
  { q: 'Is adding funds to 3 Patti Loot secure?', a: 'Yes. 3 Patti Loot uses a modern security system to protect your personal data and funds throughout every transaction.' },
  { q: 'Which payment methods are available on 3 Patti Loot?', a: '3 Patti Loot supports JazzCash and EasyPaisa — both secure and widely used payment methods across Pakistan.' },
];

const depositPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://3patti-loot.com.pk/deposit-money-in-3patti-loot/#webpage",
  "url": "https://3patti-loot.com.pk/deposit-money-in-3patti-loot",
  "name": "How to Deposit Money in 3 Patti Loot | Safe Payment Guide",
  "description": "Step-by-step guide to deposit money in 3 Patti Loot using JazzCash and EasyPaisa. Funds credited instantly.",
  "inLanguage": "en-US",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "#how-to-deposit", "#deposit-faq"]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" },
      { "@type": "ListItem", "position": 2, "name": "How to Deposit Money in 3 Patti Loot", "item": "https://3patti-loot.com.pk/deposit-money-in-3patti-loot" }
    ]
  }
};

export default function DepositMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(depositPageSchema) }} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06091F] border-b border-gray-800 py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFA500]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Text */}
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              💳 Instant Deposit Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              How to <span className="text-[#FFA500]">Deposit Money</span> in 3 Patti Loot?
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Quick, safe &amp; easy deposits via <strong className="text-white">JazzCash</strong> and <strong className="text-white">EasyPaisa</strong>. Funds credited to your account in seconds.
            </p>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#f97316] text-primary px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-lg hover:shadow-[#FFA500]/30 hover:shadow-xl hover:scale-105 mb-10"
            >
              Download &amp; Deposit Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Screenshot */}
            <div className="relative w-full aspect-[16/9] mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFA500]/15 to-transparent rounded-3xl blur-2xl scale-105" />
              <Image
                src="/teen-patti-loot-deposit-money.webp"
                alt="3 Patti Loot Deposit Money via JazzCash & EasyPaisa"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover rounded-3xl border border-[#FFA500]/20 shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section className="bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Min Deposit', value: 'Rs 200', icon: '💰' },
              { label: 'Credit Time', value: 'Instant', icon: '⚡' },
              { label: 'Payment Methods', value: '2 Options', icon: '💳' },
              { label: 'Security', value: '100% Safe', icon: '🔐' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-primary border border-gray-800">
                <span className="text-2xl mb-1">{s.icon}</span>
                <span className="text-[#FFA500] font-bold text-lg">{s.value}</span>
                <span className="text-gray-500 text-xs mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────── */}
      <section className="py-14 container mx-auto px-4 max-w-3xl">
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <Link href="/" className="text-[#FFA500] hover:underline font-semibold">3 Patti Loot</Link> is an exciting online card game where you can earn real cash every day. Depositing money is simple — the app supports quick, secure payments via <strong className="text-white">JazzCash</strong> and <strong className="text-white">EasyPaisa</strong>, the two most popular mobile wallets in Pakistan.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Once you have enjoyed your winnings, you can also easily{' '}
          <Link href="/withdraw-money-from-3patti-loot" className="text-[#FFA500] hover:underline font-semibold">
            withdraw money from 3 Patti Loot
          </Link>{' '}
          using the same secure payment methods.
        </p>
      </section>

      {/* ── STEPS ──────────────────────────────────────────────── */}
      <section id="how-to-deposit" className="py-14 bg-[#06091F]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Steps to Deposit Money</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFA500] via-[#FFA500]/40 to-transparent hidden md:block" />

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  {/* Number bubble */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFA500] text-primary flex items-center justify-center font-bold text-lg shadow-lg shadow-[#FFA500]/20 z-10">
                    {i + 1}
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-secondary border border-gray-800 group-hover:border-[#FFA500]/30 rounded-2xl p-5 transition-all">
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT METHODS ────────────────────────────────────── */}
      <section className="py-14 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Accepted Payment Methods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { name: 'JazzCash', color: 'from-red-600/20 to-red-800/10', border: 'border-red-500/30', badge: 'Most Popular', desc: 'Pakistan\'s leading mobile wallet. Instant deposit processing with zero fees.' },
            { name: 'EasyPaisa', color: 'from-green-600/20 to-green-800/10', border: 'border-green-500/30', badge: 'Widely Used', desc: 'Telenor\'s trusted mobile payment platform. Fast and reliable deposits every time.' },
          ].map((m) => (
            <div key={m.name} className={`bg-gradient-to-br ${m.color} border ${m.border} rounded-2xl p-6 flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-xl">{m.name}</span>
                <span className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full">{m.badge}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Supported on 3 Patti Loot
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPS ───────────────────────────────────────────────── */}
      <section className="py-14 bg-[#06091F]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Tips for Secure Deposits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TIPS.map((t, i) => (
              <div key={i} className="flex items-start gap-4 bg-secondary border border-gray-800 hover:border-[#FFA500]/30 rounded-2xl p-5 transition-all">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSION ─────────────────────────────────────────── */}
      <section className="py-14 container mx-auto px-4 max-w-3xl">
        <div className="bg-secondary border border-gray-800 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Adding funds to 3 Patti Loot is fast and straightforward. Open the app, tap Shop, pick your payment method, choose an amount, and approve the request — chips land in your account instantly.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Always use a secure payment method and protect your wallet credentials. New players should start with smaller amounts while learning the game.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="deposit-faq" className="py-14 bg-[#06091F]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-secondary border-l-4 border-[#FFA500] rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#FFA500]/10 via-secondary to-[#06091F] border-t border-[#FFA500]/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Playing?</h2>
          <p className="text-gray-400 mb-8">Download 3 Patti Loot now and make your first deposit to start earning real cash!</p>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#f97316] text-primary px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-xl hover:shadow-[#FFA500]/30"
          >
            Download 3 Patti Loot Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── SCHEMA ─────────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        "name": "How to Deposit Money in 3 Patti Loot",
        "description": "Step-by-step guide to deposit money in 3 Patti Loot using JazzCash and EasyPaisa",
        "step": STEPS.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.desc }))
      })}} />
    </div>
  );
}
