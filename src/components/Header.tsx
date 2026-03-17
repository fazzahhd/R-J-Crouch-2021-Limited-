import React, { useState } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14">
              <PlaceholderImage text="Logo" aspectRatio="aspect-square" className="rounded-xl" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-zinc-900 leading-none">R J CROUCH</h1>
              <p className="text-[10px] md:text-xs font-bold text-sky-600 uppercase tracking-widest mt-1">Plumbing & Gas</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-bold text-zinc-600 hover:text-sky-600 transition-colors">About</a>
            <a href="#projects" className="text-sm font-bold text-zinc-600 hover:text-sky-600 transition-colors">Projects</a>
            <a href="#reviews" className="text-sm font-bold text-zinc-600 hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-bold text-zinc-600 hover:text-sky-600 transition-colors">Contact</a>
            <a 
              href="tel:0275355163" 
              className="flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-700 transition-all transform hover:scale-105"
            >
              <Phone size={18} /> 027 535 5163
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-100 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-zinc-900">About Us</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-zinc-900">Our Work</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-zinc-900">Testimonials</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-zinc-900">Contact</a>
          <a 
            href="tel:0275355163" 
            className="flex items-center justify-center gap-2 bg-sky-600 text-white px-6 py-4 rounded-2xl font-bold w-full"
          >
            <Phone size={20} /> Call 027 535 5163
          </a>
        </div>
      )}
    </header>
  );
};
