import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">3 Patti Loot</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              3 Patti Loot is Pakistan&apos;s trusted card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other exciting games. Earn real cash with JazzCash &amp; EasyPaisa payments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/187zLnWnJt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="3 Patti Loot on Facebook">
                <svg className="w-6 h-6 text-gray-400 hover:text-accent transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
              <a href="https://x.com/teenpattiloot?s=21&t=pREWCR0SGL2R4kK-TCyECg" target="_blank" rel="noopener noreferrer" aria-label="3 Patti Loot on X (Twitter)">
                <svg className="w-6 h-6 text-gray-400 hover:text-accent transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24" width={24} height={24} aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/login" className="text-gray-300 hover:text-accent transition-colors">Login</Link></li>
              <li><Link href="/register" className="text-gray-300 hover:text-accent transition-colors">Register</Link></li>
              <li><Link href="/3patti-loot-for-pc" className="text-gray-300 hover:text-accent transition-colors">PC Version</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources links">
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/deposit-money-in-3patti-loot" className="text-gray-300 hover:text-accent transition-colors">Deposit Guide</Link></li>
              <li><Link href="/withdraw-money-from-3patti-loot" className="text-gray-300 hover:text-accent transition-colors">Withdraw Guide</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </nav>

          {/* Play Now CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Join & Play</h3>
            <p className="text-sm text-gray-300 mb-4">
              Create your free account and start earning real cash rewards on your mobile device today.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/register"
                className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all shadow-lg"
              >
                Register Now
              </Link>
              <Link
                href="/login"
                className="bg-transparent hover:bg-white/5 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all border border-gray-600 hover:border-accent"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 3 Patti Loot. All rights reserved. | <Link href="/" className="hover:text-accent">3patti-loot.com.pk</Link></p>
        </div>
      </div>
    </footer>
  );
}
