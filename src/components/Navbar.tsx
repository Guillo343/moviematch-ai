'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Film } from 'lucide-react'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-white text-xl font-bold">
            <Film className="w-6 h-6" /> MovieMatch
          </Link>
          <div className="hidden md:flex gap-4 text-sm text-white">
            <Link href="/">Home</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/genres">Genres</Link>
          </div>
        </div>
        <div className="text-white">
          <div className="w-8 h-8 bg-white/20 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
