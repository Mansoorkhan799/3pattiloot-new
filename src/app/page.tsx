import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "3 Patti Loot Pakistan – Free Download Official APK 2026",
  description: "Download 3 Patti Loot APK, Pakistan's trusted card game platform. Play Teen Patti, Rummy, Dragon vs Tiger & more. Win real cash with JazzCash & EasyPaisa. Join now!",
  keywords: [
    "3 Patti Loot", "3Patti Loot", "3 patti loot download",
    "Pakistan card games", "Teen Patti game", "online rummy game",
    "earn money playing cards", "Android gaming app 2026",
    "JazzCash gaming", "EasyPaisa gaming", "real money games Pakistan",
    "card game earning app", "Dragon vs Tiger", "best earning app Pakistan"
  ],
  alternates: { canonical: "https://3patti-loot.com.pk" },
  openGraph: {
    title: "3 Patti Loot Pakistan – Free Download Official APK 2026",
    description: "Pakistan's trusted card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa.",
    images: [{ url: "https://3patti-loot.com.pk/3-patti-loot.webp", width: 1200, height: 630, alt: "3 Patti Loot APK Download" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Loot Pakistan – Free Download Official APK 2026",
    description: "Pakistan's trusted card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa.",
    images: ["https://3patti-loot.com.pk/3-patti-loot.webp"],
  },
};

const DOWNLOAD_URL = "https://3pattilootpkk1.com/?from_gameid=5208127&channelCode=200000";

function DownloadButton({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 'px-6 py-2.5 text-sm', md: 'px-8 py-4 text-base', lg: 'px-12 py-5 text-lg' };
  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 font-bold rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 text-white transition-all group ${sizes[size]} ${className}`}
      aria-label="Download 3 Patti Loot APK"
    >
      <span>DOWNLOAD NOW</span>
      <span className="bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform" aria-hidden="true">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </span>
    </a>
  );
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://3patti-loot.com.pk/#website",
        "url": "https://3patti-loot.com.pk/",
        "name": "3 Patti Loot",
        "description": "Pakistan's trusted card game platform with Teen Patti, Rummy, Dragon Tiger and more",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://3patti-loot.com.pk/blog?q={search_term_string}" },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://3patti-loot.com.pk/#organization",
        "name": "3 Patti Loot",
        "url": "https://3patti-loot.com.pk/",
        "logo": { "@type": "ImageObject", "url": "https://3patti-loot.com.pk/3-patti-loot.webp", "width": 512, "height": 512 },
        "sameAs": ["https://www.facebook.com/share/187zLnWnJt/?mibextid=wwXIfr", "https://x.com/teenpattiloot"],
        "contactPoint": { "@type": "ContactPoint", "email": "3pattiloot.site@gmail.com", "contactType": "Customer Support", "areaServed": "PK" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3 Patti Loot",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "ratingCount": "600000" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
        "downloadUrl": "https://3patti-loot.com.pk",
        "softwareVersion": "V1.199(1)",
        "fileSize": "49MB",
        "description": "Play Teen Patti, Rummy, Dragon Tiger and other card games. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "screenshot": ["https://3patti-loot.com.pk/teen-patti-loot-game.webp", "https://3patti-loot.com.pk/teen-patti-loot.webp", "https://3patti-loot.com.pk/teen-patti-loot-deposit-money.webp"],
        "author": { "@type": "Organization", "name": "3 Patti Loot" }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is 3 Patti Loot?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Loot is Pakistan's most trusted online card gaming platform where you can play Teen Patti, Rummy, Dragon vs Tiger, Poker, and Slots to earn real money. The app is free to download on Android and supports JazzCash and EasyPaisa for instant deposits and withdrawals." } },
      { "@type": "Question", "name": "Is 3 Patti Loot real or fake?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Loot is a real and legitimate online gaming platform. Thousands of players in Pakistan have successfully withdrawn real money using JazzCash and EasyPaisa. The platform uses SSL encryption and secure payment gateways to protect users." } },
      { "@type": "Question", "name": "How to download 3 Patti Loot?", "acceptedAnswer": { "@type": "Answer", "text": "To download 3 Patti Loot, visit the official website at 3patti-loot.com.pk, click the Download Now button, enable Unknown Sources on your Android device, and install the APK file. The app is 49MB and requires Android 5.0 or higher." } },
      { "@type": "Question", "name": "How to deposit money in 3 Patti Loot?", "acceptedAnswer": { "@type": "Answer", "text": "To deposit money in 3 Patti Loot: open the app, tap the Shop option, select JazzCash or EasyPaisa, choose the amount (Rs 200–2000), tap Add Chips, enter your wallet number, and approve the payment request. Funds are credited instantly." } },
      { "@type": "Question", "name": "How to withdraw money from 3 Patti Loot?", "acceptedAnswer": { "@type": "Answer", "text": "To withdraw money from 3 Patti Loot: open the app, go to Wallet, tap Withdraw, enter the amount, select JazzCash, EasyPaisa, or Bank Transfer, enter your account details, and confirm. Withdrawals are processed within 3–24 hours. Minimum withdrawal is Rs 100." } },
      { "@type": "Question", "name": "Is 3 Patti Loot free to play?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 3 Patti Loot is completely free to download and register. New players receive a welcome bonus and free chips to start playing without depositing money." } },
      { "@type": "Question", "name": "How to register on 3 Patti Loot?", "acceptedAnswer": { "@type": "Answer", "text": "To register on 3 Patti Loot, download the app, open it, tap Register, enter your mobile number, verify with OTP, create a password, and claim your 100% welcome bonus on your first deposit." } },
      { "@type": "Question", "name": "What payment methods does 3 Patti Loot support?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Loot supports JazzCash and EasyPaisa for deposits, and JazzCash, EasyPaisa, and Bank Transfer for withdrawals — all major Pakistani mobile payment methods." } },
      { "@type": "Question", "name": "Can I play 3 Patti Loot on PC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can play 3 Patti Loot on PC by using an Android emulator like BlueStacks or LDPlayer. Download the APK on your PC, install it through the emulator, and enjoy the game on a bigger screen." } },
      { "@type": "Question", "name": "Is 3 Patti Loot available on iPhone (iOS)?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Loot is primarily available for Android devices. iOS support is not currently available, but you can check the official website for updates." } }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://3patti-loot.com.pk/#webpage",
    "url": "https://3patti-loot.com.pk/",
    "name": "3 Patti Loot Pakistan – Free Download Official APK 2026",
    "description": "3 Patti Loot is Pakistan's most trusted online card gaming platform. Play Teen Patti, Rummy, Dragon vs Tiger and earn real money with JazzCash & EasyPaisa.",
    "inLanguage": "en-US",
    "isPartOf": { "@id": "https://3patti-loot.com.pk/#website" },
    "about": { "@type": "SoftwareApplication", "name": "3 Patti Loot", "operatingSystem": "Android" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#what-is-3patti-loot", "#faq-section", "h1"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }]
    }
  };

  const features = [
    { n: "1", title: "Real Money Earning", text: "3 Patti Loot allows you to earn real cash rewards just by playing the game that you want to play or like. Whether you enjoy teen patti, poker, or rummy, every match provides you with a chance to win money. This app directly transfers your earnings through the local and easy payment methods safely. This app is not just for fun, but also becomes a great way to make extra income, which makes the 3 Patti Loot very entertaining and exciting." },
    { n: "2", title: "Easy Withdraw & Deposit", text: "With 3 Patti Loot, you can manage your money in a super simple or fast way. With just a few steps, you can withdraw or deposit money anytime using local payment methods, such as JazzCash or EasyPaisa. It also ensures you have secure and quick transactions without any delays. Through this feature, you do not worry about complicated bank processing, just like the other games." },
    { n: "3", title: "Attractive Interface", text: "This app is designed with a bright, colorful, and modern interface that can attract its users. The background music, smooth animations, and clear layout create an amazing or pleasant experience. Each section of this app is designed very well, so that you can find your favourite game easily. The design of this app feels like a real casino game on your device. Its user-friendly interface makes every game session more enjoyable." },
    { n: "4", title: "Popular Games", text: "3 Patti Loot provides you with a wide variety of famous games in one app so that you can enjoy dragon vs tiger, poker, slots, and many other exciting options. Each game of this app has simple rules that make it perfect for both beginners and experienced players. Its quick rounds or easy gameplay make it very addictive, and this variety keeps the players more entertained for long hours with an interesting gaming experience." },
    { n: "5", title: "Daily Bonus", text: "This app rewards you every day with free login bonuses or chips. You can earn extra coins just by opening the app regularly. It also provides special rewards on weekly or festival occasions. These bonuses help you to keep playing even if you do not want to deposit money. This feature keeps the game more exciting and engaging, encouraging you to stay active." },
    { n: "6", title: "Referral Earning", text: "3 Patti Loot offers you a referral program where you can earn money without playing games. You just need to share your referral link with your friends and invite them to join. When they start playing games, you receive a commission automatically. It is a simple way to make money without investment. The more you invite, the more income you can get. It is also a smart earring that makes this platform more active, and everyone loves to share it." },
    { n: "7", title: "Fast Performance", text: "This app runs smoothly on almost every Android device, even on older models. It does not hang, crash, or use too much storage space. The lightweight design of this app helps it to run faster and load to provide a smooth gameplay. Through this feature, you can switch between games quickly without having any lag. This feature can make the app perfect for all types of users with a seamless experience, even on a slow internet connection." },
    { n: "8", title: "Safe & Secure Platform", text: "In 3 Patti Loot, your privacy and money are completely safe because it uses a secure payment method and data protection system that keeps everything private. Through this feature, you do not have to worry about losing money or personal information. This app is trusted by thousands of players for its reliability. It also provides you with a fair gaming environment that makes your platform secure and risk-free for everyone." },
    { n: "9", title: "Free to Play", text: "3 Patti Loot is free to download and does not ask for any registration fees. Through this feature, you can start playing games quickly with free chips that are given by the app. This feature is a perfect choice, especially for beginners and those who want to learn before investing real money. It also offers you both entertainment and earning opportunities in one place, so that you can play games freely and earn real cash as well." },
    { n: "10", title: "24/7 Support", text: "This app also provides you with fast customer support, which helps you anytime. Whether you face a deposit issue or a technical error, this support team responds quickly. You can contact the team directly through the app for quick help. The services of this team are very friendly, professional, and reliable. It also makes your experience smooth and hassle-free. With a 24/7 support team, you can never feel stuck or ignored." },
  ];

  const featureIcons = ["💰", "⚡", "🎨", "🎮", "🎁", "👥", "🚀", "🔒", "🆓", "🎧"];

  const screenshots = [
    { src: "/teen-patti-loot.webp",              alt: "3Patti Loot App – Pakistan's #1 Online Card Game",          label: "App Overview" },
    { src: "/teen-patti-loot-game.webp",          alt: "3Patti Loot Game Interface – Play Teen Patti Online",       label: "Game Interface" },
    { src: "/teen-patti-loot-apk-pakistan.webp",  alt: "3Patti Loot APK Download for Android in Pakistan",          label: "APK Download" },
    { src: "/teen-patti-loot-deposit-money.webp", alt: "3Patti Loot Deposit Money via JazzCash & EasyPaisa",        label: "Deposit Money" },
    { src: "/teen-patti-loot-withdraw-money.webp",alt: "3Patti Loot Withdraw Money – Fast Withdrawal to JazzCash",  label: "Withdraw Money" },
    { src: "/teen-patti-loot-refer-and-earn.webp",alt: "3Patti Loot Refer & Earn – Invite Friends & Win Bonus",     label: "Refer & Earn" },
    { src: "/teen-patti-loot-bind-mail.webp",     alt: "3Patti Loot Bind Email – Secure Your Account",             label: "Bind & Secure Account" },
  ];

  const blogLinks = [
    { href: "/blog/is-3patti-loot-real-or-fake", title: "Is 3Patti Loot Real or Fake?", desc: "Discover the truth about legitimacy and payment methods" },
    { href: "/blog/how-to-play-3patti-loot", title: "How to Play 3Patti Loot", desc: "Complete beginner guide with rules and tips" },
    { href: "/blog/how-to-earn-money-3patti-loot", title: "How to Earn Money in 3Patti Loot", desc: "Earning methods, bonuses, and withdrawal guide" },
    { href: "/blog/how-to-create-account-login", title: "How to Create Account and Login", desc: "Step-by-step registration and login guide" },
    { href: "/blog/payment-methods-jazzcash-easypaisa", title: "Payment Methods – JazzCash & EasyPaisa", desc: "Complete guide on deposits and withdrawals" },
    { href: "/blog/tips-to-win-3patti-loot", title: "Tips to Win in 3Patti Loot", desc: "Expert strategies and winning techniques" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFA500]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-3xl" />
        </div>

        <div className="md:flex md:items-center md:justify-between md:gap-12 lg:gap-20 relative z-10">
          {/* Left */}
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Link href="/" className="hover:text-[#FFA500] transition-colors">
                  <span className="text-white">3 Patti Loot</span>
                </Link>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-[#FFA500]">Pakistan&apos;s Most Trusted</span>{' '}
                <span className="text-white">3 Patti Gaming Platform 2026</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline font-semibold">3Patti Loot</Link> is an exciting online card game where you can enjoy a wide collection of casino games with its attractive design, fun background music, and engaging look. Click on following download button to get this wonderful app.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <DownloadButton size="md" />
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#FFA500]/90 text-primary font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-[#FFA500]/25"
              >
                Register Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-row gap-3 mt-2 min-h-[110px]">
              {[
                { icon: "👥", value: "600K+", label: "Downloads" },
                { icon: "⭐", value: "300K+", label: "Ratings" },
                { icon: "📱", value: "49MB", label: "App Size" },
              ].map(({ icon, value, label }) => (
                <div key={label} className="bg-gradient-to-b from-[#0A1029] to-[#06091F] border border-gray-800 p-4 rounded-2xl text-center flex-1 min-h-[110px] flex flex-col justify-center gap-1 hover:border-[#FFA500]/30 transition-colors">
                  <div className="text-2xl leading-none" aria-hidden="true">{icon}</div>
                  <div className="text-white text-xl font-bold leading-tight">{value}</div>
                  <div className="text-gray-400 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs italic text-center">*Available for Android devices only</p>
          </div>

          {/* Right – Logo */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
              <div className="absolute inset-0 bg-[#FFA500]/10 rounded-full blur-2xl" aria-hidden="true" />
              <Image
                src="/3-patti-loot.webp"
                alt="3 Patti Loot Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                fetchPriority="high"
                quality={80}
                sizes="(max-width: 768px) 300px, 360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD INFO TABLE ──────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500] flex items-center gap-3">
          <span className="w-1 h-8 bg-[#FFA500] rounded-full inline-block" aria-hidden="true"></span>
          Download Info Table
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800/60 max-w-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800/60">
              <tbody className="divide-y divide-gray-800/40">
                {[
                  ["App Name", "3Patti Loot"],
                  ["Developer", "3Patti Loot dev"],
                  ["Category", "Cards, Game"],
                  ["Size", "49MB"],
                  ["Latest Version", "V1.199(1)"],
                  ["Required OS", "Android 5.0+"],
                  ["Update", "5th January 2026"],
                  ["Downloads", "600k+"],
                  ["Rating Count", "300000+"],
                  ["Language", "English, Urdu"],
                  ["Price", "Free (0$)"],
                ].map(([key, val], i) => (
                  <tr key={key} className={i % 2 === 0 ? "bg-[#0a1029]/60" : "bg-[#06091F]/60"}>
                    <td className="py-3.5 px-6 text-left font-semibold text-white w-1/2">{key}</td>
                    <td className="py-3.5 px-6 text-left text-gray-300">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#FFA500]">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            This app is divided into various sections, including card games, slots, poker, and many others, making it easy to find games that you want to play. 3Patti Loot is designed with modern graphics, smooth gameplay, and an easy interface that makes this platform more suitable for both beginners and experienced players. This app also offers you great and interesting services, allowing you to earn significant money even by investing a small amount. You can also win real cash rewards or bonuses for free. So, download the game, and start playing your favorite games to earn real cash for free.
          </p>
        </div>
      </section>

      {/* ─── WHAT IS ──────────────────────────────────────────── */}
      <section id="what-is-3patti-loot" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#FFA500]">What is 3Patti Loot Game?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-base">
            <p>3Patti Loot Game is an online card game that is based on the classic Teen Patti card game. You can play different games to earn money. It is a safe and easy platform where you can play card games and make good money in a short time. It has become a great opportunity, especially for those people who want to earn money by playing different and interesting games. This game became very popular, and people prefer it because of its beautiful design, simple settings, classic themes, and easy options.</p>
            <p>You can withdraw your winnings or deposit money anytime by using the local and easy payment methods. When you complete your deposit then you can receive a deposit bonus as well. With its attractive visuals, user-friendly design, and exciting offers, this app is one of the most enjoyable and engaging casino-style card games.</p>
          </div>
        </div>
      </section>

      {/* ─── WHY POPULAR ─────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#FFA500]">Why 3Patti Loot Game so Popular?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-base">
            <p>The 3 Patti Loot game is very popular because it allows you to earn real money while having fun. It is easy to play because it provides you with simple rules that are very easy to understand, especially for beginners. The design of this app is very beautiful and colorful, which gives you a real casino experience on your device. Players love this app because you can withdraw and deposit money easily through Easypaisa and Jazzcash without facing any delays.</p>
            <p>It also includes many exciting games such as Teen Patti, Dragon vs Tiger, Poker, Rummy, and Slots, so that you never feel bored. The other main reason for the popularity of 3 Patti Loot is its daily bonus and rewards that help you earn coins and extra cash. It is very safe and secure and can protect your personal details or money, and work smoothly even on low-storage devices.</p>
          </div>
        </div>
      </section>

      {/* ─── HOW TO START ─────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#FFA500]">How Can We Start with 3Patti Loot?</h2>
          <p className="text-gray-300 mb-5">To start the 3 Patti Loot game, follow the given steps:</p>
          <ol className="space-y-3">
            {[
              "Firstly, open the official website of 3 Patti Loot and download the APK file to your device.",
              "Once downloaded then click on the downloaded APK file to start the installation by allowing the Unknown Sources.",
              "Once installation is complete, click on it to open the 3 Patti Loot app.",
              "When the app opens then log in with your mobile number or just play as a guest.",
              "When you log in, you will get free chips or welcome bonuses to start playing the game.",
              "Choose a table or game that you want to play, and start enjoying the game.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FFA500]/20 border border-[#FFA500]/40 text-[#FFA500] text-sm font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                <span className="text-gray-300 leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── SCREENSHOTS ──────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] border border-gray-800/40 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#FFA500] text-center">3Patti Loot App Screenshots</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Click any image to view full screen</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {screenshots.map((s, i) => (
              <a key={i} href={s.src} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FFA500]/50 transition-all shadow-lg hover:shadow-[#FFA500]/10">
                <div className="relative aspect-video w-full">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#0A1029] px-4 py-2.5 text-center">
                  <p className="text-white text-sm font-semibold">{s.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Top Features of 3Patti Loot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.n} className="bg-[#06091F]/80 border border-gray-800/60 hover:border-[#FFA500]/30 px-6 py-6 rounded-2xl transition-all hover:shadow-lg hover:shadow-[#FFA500]/5 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{featureIcons[i]}</span>
                  <h3 className="text-base font-bold text-[#FFA500] group-hover:text-[#FFA500]">{f.n}: {f.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GAMES ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Best Games to Play on 3Patti Loot</h2>

          {[
            {
              title: "1: Multiplayer Games",
              games: ["Tiger Dragon", "7 UP Down", "Zoo Roulette", "Crash", "Car Roulette", "Andar Bahar", "Teenpatti 20-20", "Best of Five"],
              hot: ["Tiger Dragon", "7 UP Down", "Zoo Roulette"],
            },
            {
              title: "2: Skill Base Games",
              games: ["Domino", "Rummy", "Teen Patti", "Fishing Rush", "10 Cards", "Poker", "Ludo", "Black Jack"],
              hot: ["Domino", "Rummy"],
            },
            {
              title: "3: Slots",
              games: ["Mines", "Fruit Line", "777 Bingo", "Rattling GEMS", "Video Poker 1, 2", "Wild Energy", "WoW Slot", "God of Fortune"],
              hot: ["Mines"],
            },
          ].map(({ title, games, hot }) => (
            <div key={title} className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">{title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {games.map(g => (
                  <div key={g} className="bg-[#06091F]/80 border border-gray-800/50 hover:border-[#FFA500]/30 px-4 py-3 rounded-xl transition-colors">
                    <p className="text-white font-medium text-sm">
                      {g} {hot.includes(g) && <span className="text-[#f97316] font-bold">(Hot)</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BONUSES ───────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Benefits for New Players by Joining 3Patti Loot</h2>

          {/* Welcome Bonus */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">1: New Player Welcome Bonus</h3>
            <p className="text-gray-300 mb-4 text-sm">3Patti Loot offers 100% recharge bonus for all new fresh users on their first deposit in this game.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-800/60">
              <table className="min-w-full divide-y divide-gray-800/60">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Deposit Amount (PKR)</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Bonus Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40">
                  {[["100", "100"], ["1000", "1000"], ["5000", "5000"], ["10,000", "10,000"], ["20,000", "20,000"], ["100,000", "100,000"]].map(([dep, bon], i) => (
                    <tr key={dep} className={i % 2 === 0 ? "bg-[#06091F]/60" : "bg-[#0a1029]/40"}>
                      <td className="py-3 px-5 text-gray-300 text-sm">{dep}</td>
                      <td className="py-3 px-5 text-[#4ade80] font-semibold text-sm">{bon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recharge Rebate */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">2: Recharge Rebate</h3>
            <p className="text-gray-300 mb-4 text-sm">3Patti Loot game is also offering huge recharge rebtage bonuses for every player when they deposit amount.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-800/60">
              <table className="min-w-full divide-y divide-gray-800/60">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Rebate</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Recharge Required</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Required Wager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40">
                  {[["5%", "3000 PKR", "2x"], ["10%", "5000", "3x"], ["15%", "8000", "4x"], ["20%", "10,000", "5x"], ["25%", "20,000", "6x"], ["30%", "50,000", "7x"]].map(([reb, req, wag], i) => (
                    <tr key={reb} className={i % 2 === 0 ? "bg-[#06091F]/60" : "bg-[#0a1029]/40"}>
                      <td className="py-3 px-5 text-[#4ade80] font-bold text-sm">{reb}</td>
                      <td className="py-3 px-5 text-gray-300 text-sm">{req}</td>
                      <td className="py-3 px-5 text-gray-300 text-sm">{wag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* VIP Rebate */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">3: Big Rebate on Recharge</h3>
            <p className="text-gray-300 mb-4 text-sm">This type of reward is only available for deposit of minimum 3000PKR or more than it. It also depends upon VIP Level with increasing rebtage bonus. It can be calaimed every day.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-800/60">
              <table className="min-w-full divide-y divide-gray-800/60">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">VIP Level</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Rebate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40">
                  {[["V1-V2","1%"],["V3-V4","2%"],["V5-V6","3%"],["V7-V8","4%"],["V9-V10","5%"],["V11-V12","6%"],["V13-V14","7%"],["V15-V16","8%"],["V17-V18","9%"],["V19-V20","10%"]].map(([lv, reb], i) => (
                    <tr key={lv} className={i % 2 === 0 ? "bg-[#06091F]/60" : "bg-[#0a1029]/40"}>
                      <td className="py-3 px-5 text-[#FFA500] font-semibold text-sm">{lv}</td>
                      <td className="py-3 px-5 text-gray-300 text-sm">{reb} rebate</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD GUIDE ────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8 space-y-10">
          {/* Download steps */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Download 3Patti Loot APK Latest Version For Android</h2>
            <p className="text-gray-300 mb-5 text-sm">To download the latest version of 3 Patti Loot APK for Android devices, follow the given steps:</p>
            <ol className="space-y-3">
              {[
                "First, you open the browser on your Android device and click on the search bar.",
                "In the search bar, type the latest version of 3 Patti Loot and visit the trusted website.",
                "On the trusted website, click on the Download button to start downloading.",
                "Now wait a few seconds to complete the downloading process.",
                "Once complete, that file will be saved in the Download Folder of the device.",
              ].map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0ea5e9]/20 border border-[#0ea5e9]/40 text-[#0ea5e9] text-xs font-bold flex items-center justify-center">{i+1}</span>
                  <span className="text-gray-300 text-sm leading-relaxed pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Install steps */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Installation Guide for 3Patti Loot APK</h2>
            <p className="text-gray-300 mb-5 text-sm">After downloading to installing the 3 Patti Loot APK, follow the given steps:</p>
            <ol className="space-y-3">
              {[
                "To start installation, your device grants permission to install unknown sources.",
                "Open the Settings < Security and enable the Install Unknown Apps.",
                "After this, open the File Manager and go to the Download Folder.",
                "Click on the download APK file, and the installation process will start.",
                "Wait until the installation completes successfully on your device.",
                "Once complete then the app icon will show on your device.",
                "Click on it to launch the app and start playing the games that you want.",
              ].map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4ade80]/20 border border-[#4ade80]/40 text-[#4ade80] text-xs font-bold flex items-center justify-center">{i+1}</span>
                  <span className="text-gray-300 text-sm leading-relaxed pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* System requirements */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">System Requirement to Download &amp; install 3Patti Loot App</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-800/60">
              <table className="min-w-full divide-y divide-gray-800/60">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">System</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Minimum</th>
                    <th className="py-3 px-5 text-left text-white font-semibold text-sm">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40">
                  {[
                    ["Operating System", "Android 4.1", "Android 8.0 or above"],
                    ["RAM", "2GB or more", "4GB or more"],
                    ["Storage Space", "At least 500 MB free", "1GB free space"],
                    ["Processor", "Quad-core 1.5 GHz", "Octa-core 2.0 GHz"],
                    ["Internet", "Stable 3G or WiFi", "Fast & stable 4G or WiFi"],
                  ].map(([sys, min, rec], i) => (
                    <tr key={sys} className={i % 2 === 0 ? "bg-[#06091F]/60" : "bg-[#0a1029]/40"}>
                      <td className="py-3 px-5 text-white font-medium text-sm">{sys}</td>
                      <td className="py-3 px-5 text-gray-400 text-sm">{min}</td>
                      <td className="py-3 px-5 text-[#4ade80] text-sm font-medium">{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <DownloadButton size="lg" />
          </div>
        </div>
      </section>

      {/* ─── WHAT'S NEW ─────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What&apos;s New in the Latest Version of the 3Patti Loot?</h2>
          <ol className="space-y-3">
            {[
              "In the latest version, the game looks better with improved graphics and smooth animations.",
              "Provide fast performance so that the app opens quickly and runs smoothly without lag.",
              "Its menu and layout are simple, which makes it very easy, especially for new users.",
              "In the latest versions, more games are added, such as Dragon vs Tiger, Rumany, and others.",
              "The withdrawal or deposit options work faster and smoothly in the latest version.",
              "In the latest version, better security measures can be used that can protect your account and money.",
              "New bonuses and referral rewards provide you with more chances to earn money.",
              "Old Errors or app issues are removed to offer a smooth gaming experience.",
              "The background music or game sounds improve the app and provide more fun.",
              "The new VIP system gives you extra prizes and benefits that help you stay active.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FFA500]/20 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-3 h-3 text-[#FFA500]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── REGISTER / LOGIN ───────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8 space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-accent">How to Register &amp; Login on 3Patti Loot?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">1: Register Method</h3>
                <p className="text-gray-300 mb-4 text-sm">To register the account on 3 Patti Loot, follow the given steps:</p>
                <ol className="space-y-2.5">
                  {["Firstly, open the 3 Patti Loot app on your device.","On the homescreen, click on the Register or Sign Up option.","Now, enter your valid mobile number or email address.","Set a strong password that can never be accessed easily.","Enter the OTP that you can receive through phone or email for verification.","Once verification is complete then your account will be created successfully."].map((s,i)=>(
                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFA500]/20 text-[#FFA500] text-xs font-bold flex items-center justify-center mt-0.5">{i+1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <Link href="/register" className="inline-block mt-5 bg-[#FFA500] hover:bg-[#FFA500]/90 text-primary font-bold py-2.5 px-6 rounded-full transition-all text-sm">
                  Register Now →
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">2: Login Method</h3>
                <p className="text-gray-300 mb-4 text-sm">After registration, the next step is to log account for Follow the given steps.</p>
                <ol className="space-y-2.5">
                  {["Open the 3 Patti Loot app on your device.","Click on the Login button on the homescreen.","Enter your registered mobile number, email, or password.","Make sure that your entered details are correct.","Once confirmed, tap on the Sign in or Login option.","If you forget your password, then use Forgot Password to reset it.","Once logging is complete then you can start playing games."].map((s,i)=>(
                    <li key={i} className="flex gap-3 text-gray-300 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-bold flex items-center justify-center mt-0.5">{i+1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <Link href="/login" className="inline-block mt-5 border border-[#0ea5e9] hover:bg-[#0ea5e9]/10 text-white font-bold py-2.5 px-6 rounded-full transition-all text-sm">
                  Login Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAYMENT METHODS ────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Ways to Deposit &amp; Withdraw Money in 3Patti Loot</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { title: "1: Jazzcash", text: "Jazzcash is one of the most trusted and secure mobile banking services that allows you to deposit money quickly into your gaming account and start playing games quickly. It's a fast and safe transaction system that allows you to withdraw your winnings directly into your account wallet. The best part of this method is that you can wait a long time because the transactions are completed within seconds. This makes the Jazzcash method more convenient for those who want quick transactions." },
              { title: "2: Easypaisa", text: "Easypaisa is another secure and most commonly used payment method that is similar to the JazzCash method. It allows you to deposit or withdraw money without any difficulty. Through this method, you can add funds to your game account and transfer winnings to your Easypaisa wallet in just a few steps. The process of this method is very safe, reliable, and suitable for all types of users. With Easypaisa, you can make your gaming transactions anytime, anywhere, which makes it one of the most comfortable options for transactions." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-[#06091F]/80 border border-gray-800/50 hover:border-[#FFA500]/30 p-6 rounded-2xl transition-colors">
                <h3 className="text-lg font-semibold mb-3 text-[#FFA500]">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Deposit & Withdraw instructions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-accent">How to Deposit Money in the 3Patti Loot App?</h2>
              <p className="text-gray-300 mb-4 text-sm">To deposit money in 3 Patti Loot, follow the given steps:</p>
              <ol className="space-y-2.5">
                {["First, open the 3 Patti Loot app on your device and log in.","Now, click on the Wallet option that is available on the homescreen.","In this wallet section, click on the Deposit option.","Choose a payment method that you want to use.","Enter the amount that you want to deposit.","Click on the confirm option and wait to complete it.","Once complete, the balance will show in your game wallet."].map((s,i)=>(
                  <li key={i} className="flex gap-3 text-gray-300 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold flex items-center justify-center mt-0.5">{i+1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-accent">How to Withdraw Money in 3Patti Loot?</h2>
              <p className="text-gray-300 mb-4 text-sm">To withdraw money in 3 Patti Loot, follow the given steps:</p>
              <ol className="space-y-2.5">
                {["Open the 3 Patti Loot app and log in to your account.","Click on the Wallet option that is available on the main screen.","In the wallet section, click on the Withdrawal option.","Choose your payment method, like JazzCash or EasyPaisa.","Now enter the amount that you want to withdraw.","Enter some required details, like the account number.","Double-check all entered details and click on Confirm.","Wait a few seconds to complete the withdrawal process.","Once complete, that money will be shown in your selected payment method."].map((s,i)=>(
                  <li key={i} className="flex gap-3 text-gray-300 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f97316]/20 text-[#f97316] text-xs font-bold flex items-center justify-center mt-0.5">{i+1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SAFETY ──────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-accent">About the Safety &amp; Security of the 3Patti Loot</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            3 Patti Loot is an online gaming platform that provides you with a safe and secure environment. It uses basic security features such as data encryption or SSL certificates that can protect your information. This app also supports local payment options such as JazzCash or Easy Paisa, which can make the transactions safer and secure. However, this app is not officially available on the Google Play Store and may come with some risks, such as malware or scams. So, it is important to make sure that you can download it from official, safe, and secure sources. Always avoid sharing your sensitive personal information or banking details.
          </p>
        </div>
      </section>

      {/* ─── BLOG CARDS ─────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-accent">Latest Guides &amp; Blog</h2>
          <p className="text-gray-400 mb-6 text-sm">Explore our comprehensive guides to learn everything about 3Patti Loot:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogLinks.map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#06091F]/80 border border-gray-800/50 hover:border-[#FFA500]/40 p-5 rounded-2xl transition-all hover:shadow-lg hover:shadow-[#FFA500]/5 group block">
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#FFA500] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <span className="inline-block mt-3 text-[#FFA500] text-xs font-semibold group-hover:underline">Read more →</span>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 mt-6 text-accent hover:underline font-semibold text-sm">
            View All Blog Posts →
          </Link>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-accent">How Can We Contact the 3Patti Loot?</h2>
          <p className="text-gray-400 mb-6 text-sm">To contact the customer support team of 3 Patti Loot, you can use the given methods:</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "💬", title: "Live Chat", text: "3 Patti Loot provides you with a live chat feature inside the app so that you can directly talk to the support team if you face any problems. Whether you face any issue like playing or using the app, this team responds to you quickly and helps you to solve your issues in real time. Live chat is the fastest way to get support without leaving the app." },
              { icon: "📱", title: "Whatsapp", text: "You can also contact the support team through WhatsApp. You can simply use the number that is provided in the app to send your problem. This support team replies to you with instructions or solutions that make it easy to fix any problem. This WhatsApp support is very convenient because this is a simple and easy way to get help." },
              { icon: "❓", title: "FAQs", text: "This app also dedicates a FAQs section where common questions are given with their answers. You can check this section before contacting the customer support team to save time. These FAQs mostly cover all topics such as registration, deposit, withdrawals, bonuses, and game rules. So, this is quick and easy to find the solution without waiting long." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-[#06091F]/80 border border-gray-800/50 p-6 rounded-2xl">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-[#FFA500]">{title}:</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIPS ────────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Tips &amp; Tricks to Earn Maximum on 3Patti Loot Game</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              ["Start with Small Bets", "Always start a game with a small investment because it will help you to understand the game rules and overcome the risk of losing money. When you become confident, then increase your bet."],
              ["Use Bonuses Wisely", "3 Patti Loot offers you daily login bonuses, referral bonuses, or deposit rewards. It helps you to play more games without spending your one money or earning extra money."],
              ["Play Popular Games", "Focus on high-earning games such as Dragon vs Tiger or Teen Patti Classic that provide you with higher winning chances, and also attract players with better opportunities to earn."],
              ["Invite Friends", "Use the referral link system to invite friends every time your friends join, and then you can earn commission. The more friends you invite, the higher you can become."],
              ["Stay Active Daily", "Regularly log in to the app to collect the daily rewards or spin bonuses. Always stay active because it will increase your bonus balance or improve your chances of winning big."],
              ["Withdraw on Time", "When you earn a good amount then do not delay withdrawal. Always transfer your winnings as soon as possible through Jazcash or EasyPaisa to keep your money safe."],
              ["Learn from Practice Mode", "Before playing games with real money, try the free or demo mode as practice. This helps you to understand the gameplay easily and develop the winning strategies without any risk."],
              ["Keep the Emotions in Control", "Never play games with frustration or greed. Always stay calm or make smart decisions during the game because it helps you to avoid unnecessary losses."],
              ["With Expert Players", "Observe how other players make the moves. Through this, you can learn new techniques or strategies and timing from them to improve your skills."],
              ["Avoid Fake Apps", "Always download the original 3 Patti Loot app through official or trusted sources because fake links or websites can steal your personal data or money."],
            ].map(([tip, text]) => (
              <li key={tip} className="flex gap-3 items-start bg-[#06091F]/60 border border-gray-800/40 p-4 rounded-xl">
                <span className="flex-shrink-0 mt-0.5 text-[#FFA500]" aria-hidden="true">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <span className="text-white font-semibold text-sm">{tip}: </span>
                  <span className="text-gray-400 text-sm">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── PROS & CONS ─────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Pros &amp; Cons of using 3Patti Loot</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4ade80] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#4ade80]/20 rounded-full flex items-center justify-center" aria-hidden="true">✓</span>
                Pros
              </h3>
              <ul className="space-y-2.5">
                {["Very simple and fun to play","Earn money with a small investment","Jazzcash and Easypaisa make payment easy","Many different games for enjoyment","Fast withdrawal of your money","Very easy to use and quick to start","Daily rewards and bonuses"].map(p => (
                  <li key={p} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full bg-[#4ade80]/15 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-3 h-3 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#f87171] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#f87171]/20 rounded-full flex items-center justify-center" aria-hidden="true">✗</span>
                Cons
              </h3>
              <ul className="space-y-2.5">
                {["Risk of losing money","Sometimes withdrawals take time","Gameplay can be addictive","Run slow on weak phones","No legal Support","No Financial Freedom","Gameplay can be complicated"].map(c => (
                  <li key={c} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full bg-[#f87171]/15 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-3 h-3 text-[#f87171]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq-section" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              ["Can users play 3 Patti Loot without depositing money?", "Yes, you can play games in 3 Patti Loot by using the free bonuses like the Welcome Bonus and Referral Commission."],
              ["How do users contact customer support?", "You can contact the 3 Patti Loot support team through live chat, WhatsApp, or other social media platforms."],
              ["What makes 3 Patti Loot different from other card games?", "Its simple design, fast transactions, and exciting games make this platform more enjoyable than other apps."],
              ["Is 3 Patti Loot safe and legal to use?", "Yes, it is safe to use because this makes sure that your data privacy stays secure. However, the legality depends on your local laws, so always check your region's rules."],
              ["Can users lose money while playing?", "Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing."],
              ["Is it possible to change the language of 3 Patti Loot?", "Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily."],
              ["How do referral rewards work?", "When you share your referral link with others, or when someone joins this app through your link, you can receive a commission."],
              ["Is 3 Patti Loot available on iPhone (iOS)?", "This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability."],
            ].map(([q, a]) => (
              <details key={q} className="group bg-[#06091F]/80 border border-gray-800/50 hover:border-[#FFA500]/30 rounded-2xl transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium text-sm list-none">
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
      </section>

      {/* ─── FINAL THOUGHTS ──────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1029] to-[#06091F] border border-gray-800/60 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-accent">Final Thoughts</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            3 Patti Loot is one of the most popular online card games in the world. It not only provides you with fun or entertainment but also provides you with a great chance to earn money if you play games wisely. This app provides you with a simple and user-friendly interface that can make it easy, especially for beginners, to play games. The deposit or withdrawal system through JazzCash or EasyPaisa is very convenient, which makes this platform very easy to use. If you play responsibly, make plans with smart strategies, and focus on your skill rather than luck, 3 Patti Loot can become a more exciting or rewarding gaming experience.
          </p>
        </div>
      </section>
    </>
  );
}
