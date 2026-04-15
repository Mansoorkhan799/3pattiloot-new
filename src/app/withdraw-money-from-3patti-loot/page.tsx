import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const APP_URL = 'https://3pattilootpkk1.com/?from_gameid=5208127&channelCode=200000';

export const metadata: Metadata = {
  title: 'How to Withdraw Money from 3 Patti Loot | Fast Payout Guide',
  description: 'Learn how to withdraw money from 3 Patti Loot using JazzCash, EasyPaisa, and Bank Transfer. Follow our step-by-step guide for quick and secure withdrawals.',
  keywords: 'withdraw money 3patti loot, 3patti loot withdrawal, jazzcash withdrawal, easypaisa withdrawal, cash out 3patti loot, 3patti loot payout',
  openGraph: {
    title: 'How to Withdraw Money from 3 Patti Loot | Fast Payout Guide',
    description: 'Step-by-step guide to withdraw money from 3 Patti Loot using JazzCash, EasyPaisa, and Bank Transfer.',
    url: 'https://3patti-loot.com.pk/withdraw-money-from-3patti-loot',
    siteName: '3 Patti Loot',
    type: 'article',
    images: [{ url: 'https://3patti-loot.com.pk/teen-patti-loot-withdraw-money.webp', width: 1200, height: 630, alt: '3 Patti Loot Withdraw Money Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from 3 Patti Loot | Fast Payout Guide',
    description: 'Learn how to withdraw money from 3 Patti Loot using JazzCash, EasyPaisa & Bank Transfer.',
    images: ['https://3patti-loot.com.pk/teen-patti-loot-withdraw-money.webp'],
  },
  alternates: { canonical: 'https://3patti-loot.com.pk/withdraw-money-from-3patti-loot' },
};

const STEPS = [
  { title: 'Open 3 Patti Loot App', desc: 'Open the app on your phone and log in using your registered mobile number and password. Ensure a stable internet connection to avoid login issues.' },
  { title: 'Click on Wallet Option', desc: 'After logging in, tap the Wallet option. You will see your current balance along with the Withdraw and Deposit buttons.' },
  { title: 'Choose Withdraw Button', desc: 'Tap the Withdraw button to begin the withdrawal process. A screen with payment methods and amount fields will appear.' },
  { title: 'Type Amount', desc: 'Enter the amount you wish to cash out. It must be within the allowed withdrawal limits. Review your balance before proceeding.' },
  { title: 'Select Payment Method', desc: '3 Patti Loot supports EasyPaisa, JazzCash, and Bank Transfer. Select the method that works best for you.' },
  { title: 'Enter Payment Details', desc: 'Provide your account information — account number and registered name. Double-check all details to avoid failed transactions.' },
  { title: 'Confirm Payout', desc: 'Review all withdrawal details one more time. If everything is correct, tap the Withdraw button to confirm your payout.' },
  { title: 'Wait for Processing', desc: '3 Patti Loot processes withdrawals within 3–24 hours. Network issues may occasionally cause minor delays.' },
  { title: 'Check Your Account', desc: 'Once processed, the amount will appear in your mobile wallet or bank account. You can now use it however you like.' },
];

const TIPS = [
  { icon: '✅', text: 'Use the same account linked to your 3 Patti Loot profile.' },
  { icon: '💸', text: 'Avoid withdrawing tiny amounts — batch your earnings to save time.' },
  { icon: '🔄', text: 'Keep your 3 Patti Loot app updated for smooth payouts.' },
  { icon: '🪪', text: 'Make sure your account is fully verified before withdrawing.' },
  { icon: '🎧', text: 'Contact support if payment is not received within 24 hours.' },
];

const FAQS = [
  { q: 'What is the minimum withdrawal from 3 Patti Loot?', a: 'You can withdraw a minimum of Rs 100 from your 3 Patti Loot account at any time.' },
  { q: 'How long does 3 Patti Loot take to process withdrawals?', a: '3 Patti Loot typically processes withdrawals within 3 to 24 hours. Delays may occur due to network issues.' },
  { q: 'What should I do if my withdrawal fails?', a: 'If your payout fails, contact 3 Patti Loot customer support immediately. They will review and approve your withdrawal.' },
];

const withdrawPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://3patti-loot.com.pk/withdraw-money-from-3patti-loot/#webpage",
  "url": "https://3patti-loot.com.pk/withdraw-money-from-3patti-loot",
  "name": "How to Withdraw Money from 3 Patti Loot | Fast Payout Guide",
  "description": "Step-by-step guide to withdraw money from 3 Patti Loot using JazzCash, EasyPaisa, and Bank Transfer.",
  "inLanguage": "en-US",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "#how-to-withdraw", "#withdraw-faq"]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" },
      { "@type": "ListItem", "position": 2, "name": "How to Withdraw Money from 3 Patti Loot", "item": "https://3patti-loot.com.pk/withdraw-money-from-3patti-loot" }
    ]
  }
};

export default function WithdrawMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(withdrawPageSchema) }} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06091F] border-b border-gray-800 py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFA500]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Text */}
            <span className="inline-flex items-center gap-2 bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              💵 Fast Withdrawal Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              How to <span className="text-[#FFA500]">Withdraw Money</span> from 3 Patti Loot?
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cash out your winnings fast &amp; securely via <strong className="text-white">JazzCash</strong>, <strong className="text-white">EasyPaisa</strong>, or <strong className="text-white">Bank Transfer</strong>.
            </p>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#f97316] text-primary px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-lg hover:shadow-[#FFA500]/30 hover:shadow-xl hover:scale-105 mb-10"
            >
              Download &amp; Start Earning
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Screenshot */}
            <div className="relative w-full aspect-[16/9] mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFA500]/15 to-transparent rounded-3xl blur-2xl scale-105" />
              <Image
                src="/teen-patti-loot-withdraw-money.webp"
                alt="3 Patti Loot Withdraw Money via JazzCash & EasyPaisa"
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
              { label: 'Min Withdrawal', value: 'Rs 100', icon: '💵' },
              { label: 'Processing Time', value: '3–24 hrs', icon: '⏱️' },
              { label: 'Payment Methods', value: '3 Options', icon: '🏦' },
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
          <Link href="/" className="text-[#FFA500] hover:underline font-semibold">3 Patti Loot</Link> is a popular online card game that lets you earn real cash. Once you have won money, cashing out your funds is simple and secure. Withdrawals are sent directly to your personal mobile wallet or bank account.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Before withdrawing, make sure you have added funds via{' '}
          <Link href="/deposit-money-in-3patti-loot" className="text-[#FFA500] hover:underline font-semibold">
            3 Patti Loot deposit
          </Link>{' '}
          and built up your balance. Follow the steps below to receive your payout without any issues.
        </p>
      </section>

      {/* ── STEPS ──────────────────────────────────────────────── */}
      <section id="how-to-withdraw" className="py-14 bg-[#06091F]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Steps to Withdraw Money</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFA500] via-[#FFA500]/40 to-transparent hidden md:block" />
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFA500] text-primary flex items-center justify-center font-bold text-lg shadow-lg shadow-[#FFA500]/20 z-10">
                    {i + 1}
                  </div>
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
        <h2 className="text-3xl font-bold text-white text-center mb-10">Supported Withdrawal Methods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { name: 'JazzCash', color: 'from-red-600/20 to-red-800/10', border: 'border-red-500/30', desc: 'Instant transfer to your JazzCash mobile account.' },
            { name: 'EasyPaisa', color: 'from-green-600/20 to-green-800/10', border: 'border-green-500/30', desc: 'Fast payouts directly to your EasyPaisa wallet.' },
            { name: 'Bank Transfer', color: 'from-blue-600/20 to-blue-800/10', border: 'border-blue-500/30', desc: 'Transfer winnings to any Pakistani bank account.' },
          ].map((m) => (
            <div key={m.name} className={`bg-gradient-to-br ${m.color} border ${m.border} rounded-2xl p-6 flex flex-col gap-2`}>
              <span className="text-white font-bold text-lg">{m.name}</span>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Available
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPS ───────────────────────────────────────────────── */}
      <section className="py-14 bg-[#06091F]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Tips for Smooth Withdrawals</h2>
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
            Withdrawing from 3 Patti Loot is quick and hassle-free when you follow the correct steps. Always verify your payment details before confirming to avoid delays.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Follow the withdrawal limits and use a verified account for smooth payouts. If you face any issues, the customer support team is available to help you resolve them promptly.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="withdraw-faq" className="py-14 bg-[#06091F]">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Withdraw Your Winnings?</h2>
          <p className="text-gray-400 mb-8">Download 3 Patti Loot, win big, and cash out securely to your wallet!</p>
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
        "name": "How to Withdraw Money from 3 Patti Loot",
        "description": "Step-by-step guide to withdraw money from 3 Patti Loot using JazzCash, EasyPaisa, and Bank Transfer",
        "step": STEPS.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.desc }))
      })}} />
    </div>
  );
}
