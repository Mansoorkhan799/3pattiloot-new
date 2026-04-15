import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Register on 3 Patti Loot | Free Account & 100% Bonus',
  description: 'Create your free 3 Patti Loot account and claim 100% welcome bonus on first deposit. Step-by-step registration guide for Android users in Pakistan.',
  keywords: ['3 Patti Loot register', '3 patti loot sign up', 'create account 3 patti loot', '3patti loot registration', 'how to register 3 patti loot'],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://3patti-loot.com.pk/register' },
  openGraph: {
    title: 'Register on 3 Patti Loot | Free Account & 100% Bonus',
    description: 'Create your free account, verify your number, and claim your 100% welcome bonus on 3 Patti Loot today.',
    url: 'https://3patti-loot.com.pk/register',
    siteName: '3 Patti Loot',
    type: 'article',
    images: [{ url: 'https://3patti-loot.com.pk/teen-patti-loot.webp', width: 1200, height: 630, alt: '3 Patti Loot Register – Free Account' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register on 3 Patti Loot | Free Account & 100% Bonus',
    description: 'Create your free 3 Patti Loot account and claim 100% welcome bonus. Step-by-step guide.',
    images: ['https://3patti-loot.com.pk/teen-patti-loot.webp'],
  },
};

const APP_URL = 'https://3pattilootpkk1.com/?from_gameid=5208127&channelCode=200000';

export default function RegisterPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register on 3 Patti Loot',
    description: 'Step-by-step guide to create a free 3 Patti Loot account and claim 100% welcome bonus.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Open the App', text: 'Firstly, open the 3 Patti Loot app on your device.' },
      { '@type': 'HowToStep', position: 2, name: 'Tap Register', text: 'On the homescreen, click on the Register or Sign Up option.' },
      { '@type': 'HowToStep', position: 3, name: 'Enter Mobile or Email', text: 'Enter your valid mobile number or email address.' },
      { '@type': 'HowToStep', position: 4, name: 'Set Password', text: 'Set a strong password that can never be accessed easily.' },
      { '@type': 'HowToStep', position: 5, name: 'Verify OTP', text: 'Enter the OTP that you receive through phone or email for verification.' },
      { '@type': 'HowToStep', position: 6, name: 'Account Created', text: 'Once verification is complete, your account will be created successfully.' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is registration on 3 Patti Loot free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, creating an account on 3 Patti Loot is completely free. There are no registration fees or hidden charges.' } },
      { '@type': 'Question', name: 'What bonus do I get after registering?', acceptedAnswer: { '@type': 'Answer', text: 'New players receive a 100% welcome bonus on their first deposit. For example, if you deposit 1000 PKR, you get an extra 1000 PKR as a bonus.' } },
      { '@type': 'Question', name: 'What information is needed to register?', acceptedAnswer: { '@type': 'Answer', text: 'You only need a valid mobile number or email address and a password. An OTP will be sent to verify your number.' } },
      { '@type': 'Question', name: 'Can I use a referral code during registration?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if a friend invited you, enter their referral code during registration to unlock extra rewards for both of you.' } },
      { '@type': 'Question', name: 'How long does registration take?', acceptedAnswer: { '@type': 'Answer', text: 'The entire registration process takes less than 2 minutes. You just need to enter your details, verify your number, and your account is ready.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }, { "@type": "ListItem", "position": 2, "name": "Register", "item": "https://3patti-loot.com.pk/register" }] }) }} />

      <div className="min-h-screen bg-primary">

        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/3-patti-loot.webp"
                  alt="3 Patti Loot Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl shadow-lg drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                🎁 100% Welcome Bonus on First Deposit
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Register on 3 Patti Loot?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Create Your Free Account &amp; Claim 100% Welcome Bonus Today
              </p>
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Register Free Now
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Loot</Link> is Pakistan&apos;s most trusted online card gaming app where you can play Teen Patti, Rummy, Dragon vs Tiger, Poker, Slots, and many other exciting games to earn real money. To start earning, you first need to create a free account. The registration process is quick, easy, and completely free.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Once you register, you will receive a <strong className="text-accent">100% welcome bonus</strong> on your first deposit. For example, if you deposit 1000 PKR, you get an extra 1000 PKR as a bonus to play with. After registering, you can also <Link href="/login" className="text-accent hover:underline font-semibold">login to 3 Patti Loot</Link> anytime from your device and access all your earnings, bonuses, and games.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Registration */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Step-by-Step Registration Guide
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Download and Open the App', text: 'First, download the latest version of 3 Patti Loot APK from the official website. Once installed, open the app on your Android device.' },
                  { title: 'Tap Register or Sign Up', text: 'On the homescreen, you will see two options: Login and Register. Tap on the Register or Sign Up button to start creating your new account.' },
                  { title: 'Enter Your Mobile Number or Email', text: 'Enter your valid mobile number (Pakistani) or email address in the registration form. This will be used to verify your account and log in later.' },
                  { title: 'Create a Strong Password', text: 'Set a strong password for your account. Use a combination of letters, numbers, and special characters. Avoid using simple passwords like your name or date of birth.' },
                  { title: 'Enter OTP for Verification', text: 'You will receive a One-Time Password (OTP) on your mobile number or email. Enter this OTP to verify your identity and confirm your account.' },
                  { title: 'Enter Referral Code (Optional)', text: 'If a friend invited you with a referral code, enter it in the referral code field to unlock extra bonuses for both of you. This step is optional.' },
                  { title: 'Account Created Successfully', text: 'Once verification is complete, your 3 Patti Loot account will be created successfully. You will be redirected to the main screen where you can see your free welcome chips.' },
                ].map((step, i) => (
                  <div key={i} className="bg-primary rounded-xl p-6 md:p-8 border border-gray-800 hover:border-accent/30 transition-colors">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/30 text-accent rounded-full flex items-center justify-center text-xl font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Bonuses */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Bonuses You Get After Registration
              </h2>
              <p className="text-center text-gray-400 mb-10">New players enjoy exclusive rewards from the moment they join.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '🎁', title: '100% Welcome Bonus', text: 'Get 100% bonus on your first deposit. Deposit 500 PKR and play with 1000 PKR. The bigger your deposit, the bigger your bonus.' },
                  { icon: '🪙', title: 'Free Welcome Chips', text: 'New accounts receive free chips to start playing without depositing any money. Use them to explore games and practice before investing real cash.' },
                  { icon: '💎', title: 'VIP Entry Benefits', text: 'New registrations start earning VIP points from day one. Higher VIP levels unlock bigger rebates, exclusive games, and faster withdrawals.' },
                ].map(({ icon, title, text }) => (
                  <div key={title} className="bg-secondary border border-gray-800 hover:border-accent/40 rounded-2xl p-6 text-center transition-colors">
                    <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* First Deposit Bonus Table */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                100% Welcome Bonus Table
              </h2>
              <p className="text-center text-gray-400 mb-10">Deposit any amount and get 100% bonus on your first recharge.</p>
              <div className="overflow-hidden rounded-2xl border border-gray-800/60">
                <table className="min-w-full divide-y divide-gray-800/60">
                  <thead className="bg-primary">
                    <tr>
                      <th className="py-4 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th>
                      <th className="py-4 px-6 text-left text-accent font-semibold">Bonus Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/40">
                    {[['100','100'],['1000','1000'],['5000','5000'],['10,000','10,000'],['20,000','20,000'],['100,000','100,000']].map(([dep, bon], i) => (
                      <tr key={dep} className={i % 2 === 0 ? 'bg-primary/60' : 'bg-[#0a1029]/40'}>
                        <td className="py-3.5 px-6 text-gray-300 text-sm">{dep}</td>
                        <td className="py-3.5 px-6 text-[#4ade80] font-semibold text-sm">{bon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why Register */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Why You Should Register on 3 Patti Loot
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: '💰', title: 'Earn Real Money', text: 'Registered users can withdraw real cash winnings directly to their JazzCash or EasyPaisa account. Guest users cannot withdraw money.' },
                  { icon: '🎁', title: 'Daily Login Bonuses', text: 'Claim free chips and coins every day just by opening the app. These bonuses help you play more without spending your own money.' },
                  { icon: '👥', title: 'Referral Program', text: 'Invite your friends using your unique referral link and earn commission every time they play. The more friends you invite, the more you earn.' },
                  { icon: '🏆', title: 'VIP Rewards', text: 'Build your VIP level to unlock higher rebates, exclusive games, faster withdrawals, and special VIP-only bonuses and tournaments.' },
                  { icon: '💳', title: 'Deposit & Withdraw Anytime', text: 'Add or withdraw funds anytime using JazzCash or EasyPaisa. Transactions are completed within seconds with no hidden fees.' },
                  { icon: '🔐', title: 'Secure Account', text: 'Your account, wallet balance, and personal data are fully protected with SSL encryption. Only you can access your account and earnings.' },
                ].map(({ icon, title, text }) => (
                  <div key={title} className="bg-secondary border border-gray-800 hover:border-accent/30 rounded-2xl p-6 flex gap-4 items-start transition-colors">
                    <span className="text-3xl flex-shrink-0" aria-hidden="true">{icon}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-1.5">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Registration */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                Tips for a Smooth Registration
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ['Use your real mobile number', 'Always register with your actual mobile number, as you will need it to receive OTPs and for account recovery.'],
                  ['Download from the official source', 'Only download 3 Patti Loot from the official website to avoid fake apps that could steal your information.'],
                  ['Create a strong password', 'Use a password with at least 8 characters including numbers and symbols. Never share your password with anyone.'],
                  ['Enter referral code if available', 'If a friend shared a referral code with you, enter it during registration to get extra bonus rewards for both of you.'],
                  ['Deposit soon after registering', 'Make your first deposit right after registering to claim the 100% welcome bonus before it expires.'],
                  ['Keep your login details safe', 'Save your mobile number and password securely. Do not share your login credentials with anyone to protect your account and earnings.'],
                ].map(([tip, text]) => (
                  <div key={tip} className="bg-primary border border-gray-800 rounded-xl p-5 flex gap-4 items-start">
                    <span className="flex-shrink-0 mt-0.5 text-accent" aria-hidden="true">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-white font-semibold text-sm">{tip}: </span>
                      <span className="text-gray-400 text-sm">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  ['Is registration on 3 Patti Loot free?', 'Yes, creating an account on 3 Patti Loot is completely free. There are no registration fees or hidden charges.'],
                  ['What bonus do I get after registering?', 'New players receive a 100% welcome bonus on their first deposit. For example, if you deposit 1000 PKR, you get an extra 1000 PKR as a bonus.'],
                  ['What information is needed to register?', 'You only need a valid mobile number or email address and a password. An OTP will be sent to verify your number.'],
                  ['Can I use a referral code during registration?', 'Yes, if a friend invited you, enter their referral code during registration to unlock extra rewards for both of you.'],
                  ['How long does registration take?', 'The entire registration process takes less than 2 minutes. You just need to enter your details, verify your number, and your account is ready.'],
                ].map(([q, a]) => (
                  <details key={q as string} className="group bg-secondary border border-gray-800 hover:border-accent/30 rounded-2xl transition-colors">
                    <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium list-none">
                      {q}
                      <span className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center transition-transform group-open:rotate-180" aria-hidden="true">
                        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-primary border border-gray-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-4">Join 600K+ Players Today!</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Create your free 3 Patti Loot account now and get a 100% welcome bonus on your first deposit. Start playing and earning real money with JazzCash &amp; EasyPaisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-all shadow-lg hover:scale-105"
                >
                  Register Free &amp; Get Bonus
                </Link>
                <Link
                  href="/login"
                  className="border border-gray-600 text-white font-bold px-8 py-4 rounded-full hover:border-accent hover:bg-accent/5 transition-all"
                >
                  Already Registered? Login
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
