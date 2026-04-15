import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About 3 Patti Loot - Pakistan\'s Premier Card Gaming Platform',
  description: 'Learn about 3 Patti Loot, our history, mission, and vision for creating the best card gaming platform in Pakistan with Teen Patti, Rummy and more.',
  keywords: ['3 Patti Loot about', 'about us', 'gaming company Pakistan', '3 Patti Loot history', 'card gaming platform', 'Teen Patti', '3 Patti'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://3patti-loot.com.pk/about-us",
  },
  openGraph: {
    title: 'About 3 Patti Loot - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about 3 Patti Loot, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    url: "https://3patti-loot.com.pk/about-us",
    siteName: "3 Patti Loot",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3patti-loot.com.pk/3-patti-loot.webp",
        width: 1200,
        height: 630,
        alt: "About 3 Patti Loot - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About 3 Patti Loot - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about 3 Patti Loot, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    images: ["https://3patti-loot.com.pk/3-patti-loot.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://3patti-loot.com.pk/about-us" }] }) }} />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#0A1029]">
                  <Link href="/" className="absolute inset-0">
                    <Image 
                      src="/3-patti-loot.webp" 
                      alt="3 Patti Loot Logo" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                      className="object-contain p-4"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <a href="https://3patti-loot.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.3patti-loot.com.pk</a>, a trusted platform to provide the latest information about 3patti <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Loot</Link>. This is one of the most popular online casino games in Pakistan, having <span className="font-bold text-accent">500K+ users</span>.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of people are playing these wonderful games and earning a handsome amount on a daily or weekly basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the users with the latest and updated information and earning tips about 3 Patti Loot. For any type of information or query, you can visit our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're here to help! Contact our team for any information or queries about 3 Patti Loot.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "3 Patti Loot",
              "alternateName": "3 Patti Loot",
              "url": "https://3patti-loot.com.pk",
              "logo": "https://3patti-loot.com.pk/3-patti-loot.webp",
              "description": "3 Patti Loot is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and more with real cash rewards.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://www.facebook.com/people/3-Patti-Loot/61561881890600/",
                "https://x.com/Teenpattisky"
              ],
              "founder": {
                "@type": "Person",
                "name": "Erio 3 Patti Loot Dev"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Online card gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://3patti-loot.com.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
} 