'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="3 Patti Loot – Home">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/3-patti-loot.webp"
              alt="3 Patti Loot Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            3 Patti Loot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/deposit-money-in-3patti-loot" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-3patti-loot" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/3patti-loot-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/about-us" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-accent font-medium transition-colors border border-gray-600 hover:border-accent px-4 py-1.5 rounded-full"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-5 py-1.5 rounded-full transition-all shadow-lg hover:shadow-accent/30"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
}
