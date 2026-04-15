import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How to Login 3 Patti Loot? | Step-by-Step Login Guide 2026',
  description: 'Learn how to login to 3 Patti Loot account easily. Follow our complete step-by-step guide for signing in with mobile number, email, or social login on Android.',
  keywords: ['3 Patti Loot login', '3 patti loot sign in', 'how to login 3 patti loot', '3patti loot account login', 'login 3patti loot app'],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://3patti-loot.com.pk/login' },
  openGraph: {
    title: 'How to Login 3 Patti Loot? | Step-by-Step Login Guide 2026',
    description: 'Complete guide on how to login to your 3 Patti Loot account. Sign in with mobile number, email, or guest mode and start playing instantly.',
    url: 'https://3patti-loot.com.pk/login',
    siteName: '3 Patti Loot',
    type: 'article',
    images: [{ url: 'https://3patti-loot.com.pk/teen-patti-loot.webp', width: 1200, height: 630, alt: '3 Patti Loot Login Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Login 3 Patti Loot? | Step-by-Step Login Guide 2026',
    description: 'Step-by-step guide to login your 3 Patti Loot account with mobile, email, or guest mode.',
    images: ['https://3patti-loot.com.pk/teen-patti-loot.webp'],
  },
};

const APP_URL = 'https://3pattilootpkk1.com/?from_gameid=5208127&channelCode=200000';

export default function LoginPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Login to 3 Patti Loot',
    description: 'Step-by-step guide to login to your 3 Patti Loot account using mobile number or email.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Open the App', text: 'Open the 3 Patti Loot app on your Android device.' },
      { '@type': 'HowToStep', position: 2, name: 'Tap Login', text: 'Click on the Login button on the homescreen.' },
      { '@type': 'HowToStep', position: 3, name: 'Enter Details', text: 'Enter your registered mobile number, email, or password.' },
      { '@type': 'HowToStep', position: 4, name: 'Verify Details', text: 'Make sure that your entered details are correct.' },
      { '@type': 'HowToStep', position: 5, name: 'Sign In', text: "Once confirmed, tap on the Sign in or Login option." },
      { '@type': 'HowToStep', position: 6, name: 'Forgot Password', text: 'If you forget your password, use Forgot Password to reset it.' },
      { '@type': 'HowToStep', position: 7, name: 'Start Playing', text: 'Once login is complete, you can start playing games.' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I login to 3 Patti Loot?', acceptedAnswer: { '@type': 'Answer', text: 'Open the app, tap Login, enter your registered mobile number or email with your password, and tap Sign In.' } },
      { '@type': 'Question', name: 'Can I login as a guest in 3 Patti Loot?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 3 Patti Loot allows you to play as a guest without creating an account. However, guest accounts cannot withdraw real money.' } },
      { '@type': 'Question', name: 'What should I do if I forgot my 3 Patti Loot password?', acceptedAnswer: { '@type': 'Answer', text: 'On the login screen, tap Forgot Password and follow the instructions to reset your password via OTP sent to your registered mobile number.' } },
      { '@type': 'Question', name: 'Is the 3 Patti Loot login secure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 3 Patti Loot uses SSL encryption and secure authentication to protect your account and personal information.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }, { "@type": "ListItem", "position": 2, "name": "Login", "item": "https://3patti-loot.com.pk/login" }] }) }} />

      <div className="min-h-screen bg-primary">

        {/* Hero */}
        <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/3-patti-loot.webp"
                  alt="3 Patti Loot Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl shadow-lg drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]"
                  priority
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Login 3 Patti Loot?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Sign In to Your Account &amp; Start Earning Real Money in Seconds
              </p>
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Login &amp; Play Now
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
                  <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Loot</Link> is Pakistan&apos;s most popular online card gaming platform where you can earn real money by playing Teen Patti, Rummy, Dragon vs Tiger, and many more exciting games. To access all the features, rewards, and earnings, you need to login to your account. The login process is very simple and takes only a few seconds.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you are a new player or a returning user, this guide will walk you through everything you need to know about logging in to 3 Patti Loot. If you have not created an account yet, you can also <Link href="/register" className="text-accent hover:underline font-semibold">register on 3 Patti Loot</Link> for free and get a 100% welcome bonus on your first deposit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Login Guide */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Step-by-Step Login Guide
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Open the 3 Patti Loot App', text: 'Open the 3 Patti Loot app on your Android device. If you have not downloaded it yet, visit the official website and download the latest APK to install it.' },
                  { title: 'Tap the Login Button', text: 'On the homescreen of the app, you will see a Login button. Tap on it to go to the login screen where you can enter your account details.' },
                  { title: 'Enter Your Mobile Number or Email', text: 'Type in your registered mobile number or email address that you used when creating your 3 Patti Loot account. Make sure there are no typing errors.' },
                  { title: 'Enter Your Password', text: 'Enter the password you set during registration. Your password is case-sensitive, so make sure caps lock is off. If you do not remember your password, use the Forgot Password option.' },
                  { title: 'Tap Sign In', text: 'After entering your mobile number and password correctly, tap the Sign In or Login button. The app will verify your details and log you in within seconds.' },
                  { title: 'Reset Password if Needed', text: 'If you forget your password, tap Forgot Password on the login screen. Enter your registered mobile number to receive an OTP, and follow the steps to set a new password.' },
                  { title: 'Start Playing and Earning', text: 'Once you are logged in successfully, you will land on the main screen where you can see all games, your wallet balance, bonuses, and other features. Start playing your favourite games and earn real cash!' },
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

        {/* Login Methods */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                3 Patti Loot Login Methods
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: '📱',
                    title: 'Mobile Number Login',
                    text: 'The most common way to login is with your registered mobile number and password. This is the fastest and most secure method for Pakistani users.',
                  },
                  {
                    icon: '📧',
                    title: 'Email Login',
                    text: 'You can also login using your registered email address and password. This is useful if you registered with an email account.',
                  },
                  {
                    icon: '👤',
                    title: 'Guest Mode',
                    text: 'Play without an account using Guest Mode. Note that guest accounts cannot withdraw real money, so register to unlock full features.',
                  },
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

        {/* Common Login Issues */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Common Login Issues &amp; Solutions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    problem: 'Forgot Password',
                    solution: 'Tap Forgot Password on the login screen, enter your registered mobile number, receive an OTP, and set a new password. The process takes under 2 minutes.',
                  },
                  {
                    problem: 'Account Not Found',
                    solution: 'Make sure you are entering the same mobile number or email you used during registration. If you have not registered yet, create a new account for free.',
                  },
                  {
                    problem: 'Wrong Password Error',
                    solution: 'Double-check your password for typos. Passwords are case-sensitive. After multiple failed attempts, use Forgot Password to reset it.',
                  },
                  {
                    problem: 'App Not Opening',
                    solution: 'Clear the app cache from your device settings, restart the app, or re-download the latest version of 3 Patti Loot APK from the official website.',
                  },
                  {
                    problem: 'Account Suspended',
                    solution: 'If your account is suspended, contact the 3 Patti Loot customer support team via live chat or WhatsApp available in the app for quick resolution.',
                  },
                ].map(({ problem, solution }) => (
                  <div key={problem} className="bg-primary border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center" aria-hidden="true">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.062 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1.5">{problem}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Logging In */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                Benefits of Logging In to 3 Patti Loot
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: '💰', title: 'Access Real Money Games', text: 'Only logged-in users can play real money games and withdraw their winnings through JazzCash or EasyPaisa.' },
                  { icon: '🎁', title: 'Claim Daily Bonuses', text: 'Login every day to collect free daily login bonuses, chips, and spin rewards that help you play more without spending money.' },
                  { icon: '🏆', title: 'Track Your Progress', text: 'Monitor your VIP level, earnings history, referral commissions, and transaction records from your personal account dashboard.' },
                  { icon: '👥', title: 'Earn Referral Commissions', text: 'Share your unique referral link and earn commission when your friends join and play. Referral earnings are only available for registered users.' },
                  { icon: '🔐', title: 'Secure Your Wallet', text: 'A logged-in account keeps your money safe and ensures only you can access your wallet balance and withdrawal settings.' },
                  { icon: '🎮', title: 'Full Game Access', text: 'Get access to all games including exclusive VIP games, tournaments, and special events that are not available for guest users.' },
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

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  ['How do I login to 3 Patti Loot?', 'Open the app, tap Login, enter your registered mobile number or email with your password, and tap Sign In.'],
                  ['Can I login as a guest in 3 Patti Loot?', 'Yes, 3 Patti Loot allows you to play as a guest without creating an account. However, guest accounts cannot withdraw real money.'],
                  ['What should I do if I forgot my 3 Patti Loot password?', 'On the login screen, tap Forgot Password and follow the instructions to reset your password via OTP sent to your registered mobile number.'],
                  ['Is the 3 Patti Loot login secure?', 'Yes, 3 Patti Loot uses SSL encryption and secure authentication to protect your account and personal information.'],
                ].map(([q, a]) => (
                  <details key={q as string} className="group bg-primary border border-gray-800 hover:border-accent/30 rounded-2xl transition-colors">
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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-secondary border border-gray-800 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Play?</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Login to your 3 Patti Loot account now and start playing your favourite games. Earn real cash with JazzCash and EasyPaisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-all shadow-lg hover:scale-105"
                >
                  Login &amp; Play Now
                </Link>
                <Link
                  href="/register"
                  className="border border-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent/10 transition-all"
                >
                  Create New Account
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
