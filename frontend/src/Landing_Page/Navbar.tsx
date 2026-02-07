'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#030303]' : 'bg-[#030303]/10 backdrop-blur-xl'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8  bg-gradient-to-br from-[#FF5500] to-[#FF8000] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="font-bold text-black text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Nord</span>
            </Link>
            
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#advantage" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Advantage
              </Link>
              <Link href="#referral" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Referral
              </Link>
               <Link href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium text-white hover:text-primary transition-colors hidden sm:block">
              Log In
            </Link>
            <Button size="sm" className="hidden sm:inline-flex shadow-[0_0_15px_rgba(255,85,0,0.3)]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
