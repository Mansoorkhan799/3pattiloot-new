'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button className="flex items-center text-accent p-1" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div id="mobile-nav-menu" className="fixed inset-0 z-50 flex flex-col bg-primary" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)} aria-label="3 Patti Loot – Home">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/3-patti-loot.webp" alt="3 Patti Loot Logo" fill sizes="32px" className="object-contain" />
              </div>
              <span className="text-accent text-xl font-bold">3 Patti Loot</span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-accent p-1" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
            {[
              { href: '/', label: 'Home' },
              { href: '/deposit-money-in-3patti-loot', label: 'Deposit Guide' },
              { href: '/withdraw-money-from-3patti-loot', label: 'Withdraw Guide' },
              { href: '/3patti-loot-for-pc', label: 'PC Version' },
              { href: '/about-us', label: 'About Us' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact-us', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-white hover:text-accent py-2.5 text-lg font-medium transition-colors border-b border-gray-800/50" onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            ))}

            <div className="flex gap-3 mt-4 pt-2">
              <Link href="/login" onClick={() => setIsOpen(false)}
                className="flex-1 text-center border border-gray-600 text-white font-bold py-3 rounded-full hover:border-accent transition-colors">
                Login
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}
                className="flex-1 text-center bg-accent text-primary font-bold py-3 rounded-full hover:bg-accent/90 transition-colors">
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
