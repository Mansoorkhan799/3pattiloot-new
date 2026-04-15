import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy – 3 Patti Loot | Your Privacy Matters',
  description: 'At 3 Patti Loot, we value your privacy. Read our privacy policy to understand how we collect, use, and safeguard your personal data.',
  keywords: ['3 Patti Loot privacy policy', 'privacy', 'data protection', 'user privacy', 'data security'],
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
    canonical: 'https://3patti-loot.com.pk/privacy',
  },
  openGraph: {
    title: 'Privacy Policy – 3 Patti Loot',
    description: 'Learn how 3 Patti Loot protects your personal information and data.',
    url: 'https://3patti-loot.com.pk/privacy',
    siteName: '3 Patti Loot',
    type: 'website',
    images: [
      {
        url: 'https://3patti-loot.com.pk/3-patti-loot.webp',
        width: 1200,
        height: 630,
        alt: '3 Patti Loot Privacy Policy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – 3 Patti Loot',
    description: 'Learn how 3 Patti Loot protects your personal information and data.',
    images: ['https://3patti-loot.com.pk/3-patti-loot.webp'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://3patti-loot.com.pk/" }, { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://3patti-loot.com.pk/privacy" }] }) }} />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy for 3 Patti Loot</h1>
            <p className="text-lg text-gray-400">Last Updated: January 4, 2026</p>
          </div>
          
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#0A1029] border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <p className="text-gray-300 text-lg">
                  At <Link href="/" className="text-accent hover:underline font-semibold">3 Patti Loot</Link>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit or use our platform.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Information We Collect</h2>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>
                    <strong className="text-white">Personal Information:</strong> such as name, email address, and device details, only when you choose to provide it.
                  </li>
                  <li>
                    <strong className="text-white">Usage Data:</strong> including game activity, IP address, browser type, and time spent on the platform.
                  </li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. How We Use Your Information</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  We use your data to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>Improve gameplay experience</li>
                  <li>Provide customer support</li>
                  <li>Analyze usage trends</li>
                  <li>Prevent fraud and maintain security</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Cookies</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  Our website/app may use cookies to enhance your experience. You can disable cookies through your browser settings.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Data Sharing</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  We do not sell or share your personal data with third parties, except when required by law or to provide necessary services.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. Children's Privacy</h2>
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
                <p className="text-gray-300">
                  <strong className="text-white">Important:</strong> 3 Patti Loot is intended for users 18 years or older. We do not knowingly collect data from minors.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Security</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  We implement appropriate measures to protect your information from unauthorized access or misuse.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Changes to Policy</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Please review this page regularly for any changes.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. Contact Us</h2>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-4">
                <p className="text-gray-300 mb-4">
                  For any questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  <a href="mailto:3pattiloot.site@gmail.com" className="text-accent hover:underline text-lg font-semibold">3pattiloot.site@gmail.com</a>
                </div>
              </div>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  By using 3 Patti Loot, you consent to this Privacy Policy and agree to its terms.
                </p>
                <p className="text-gray-400 text-sm">
                  © 2026 3 Patti Loot. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
