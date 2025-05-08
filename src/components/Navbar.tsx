'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import NavSearch from './NavSearch';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3 md:px-12">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-red-600 font-black text-2xl tracking-wider">
            MovieMatch
          </Link>
          <ul className="hidden md:flex items-center gap-4 text-sm text-white font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">TV Shows</Link></li>
            <li><Link href="#">Movies</Link></li>
            <li><Link href="#">New & Popular</Link></li>
          </ul>
        </div>

        {/* Search + Mobile */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <NavSearch />
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur p-4 space-y-4">
          <NavSearch />
          <Link href="/">Home</Link>
          <Link href="#">TV Shows</Link>
          <Link href="#">Movies</Link>
        </div>
      )}
    </header>
  );
}
