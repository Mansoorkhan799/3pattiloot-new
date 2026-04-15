import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://3patti-loot.com.pk'),
  title: {
    default: "3 Patti Loot Pakistan – Free Download Official APK 2026",
    template: "%s | 3 Patti Loot"
  },
  description: "Download 3 Patti Loot APK, Pakistan's trusted card game platform. Play Teen Patti, Rummy, Dragon vs Tiger & more. Win real cash with JazzCash & EasyPaisa. Join now!",
  keywords: [
    "3 Patti Loot",
    "3Patti Loot",
    "3 patti loot download",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  authors: [{ name: "3 Patti Loot Team" }],
  creator: "3 Patti Loot",
  publisher: "3 Patti Loot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/3-patti-loot.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/3-patti-loot.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: [
      { url: '/3-patti-loot.webp', sizes: '180x180', type: 'image/webp' }
    ],
    shortcut: ['/3-patti-loot.ico']
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: "https://3patti-loot.com.pk",
  },
  openGraph: {
    title: "3 Patti Loot Pakistan – Free Download Official APK 2026",
    description: "Join players on Pakistan's trusted card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://3patti-loot.com.pk",
    siteName: "3 Patti Loot",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3patti-loot.com.pk/3-patti-loot.webp",
        width: 1200,
        height: 630,
        alt: "3 Patti Loot – Pakistan Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Loot Pakistan – Free Download Official APK 2026",
    description: "Join players on Pakistan's trusted card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@teenpattiloot",
    images: ["https://3patti-loot.com.pk/3-patti-loot.webp"],
  },
  applicationName: "3 Patti Loot",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        )}

        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link rel="icon" href="/3-patti-loot.ico" sizes="32x32" />
        <link rel="icon" href="/3-patti-loot.webp" type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/3-patti-loot.webp" sizes="180x180" />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <div className="stars-bg fixed inset-0 z-0 opacity-20" aria-hidden="true"></div>
        <Header />
        <main id="main-content" className="flex-grow relative z-10">
          {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTop />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "3 Patti Loot",
              "url": "https://3patti-loot.com.pk",
              "logo": "https://3patti-loot.com.pk/3-patti-loot.webp",
              "description": "3 Patti Loot is Pakistan's trusted card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other games with real cash rewards.",
              "sameAs": [
                "https://www.facebook.com/share/187zLnWnJt/?mibextid=wwXIfr",
                "https://x.com/teenpattiloot"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "3pattiloot.site@gmail.com",
                "contactType": "Customer Support",
                "areaServed": "PK"
              }
            })
          }}
        />

        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "3 Patti Loot",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "300000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
