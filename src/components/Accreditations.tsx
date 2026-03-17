import React from 'react';
import { PlaceholderImage } from './PlaceholderImage';

export const Accreditations: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-10">Our Accreditations & Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 1" className="border-none bg-transparent" />
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 2" className="border-none bg-transparent" />
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 3" className="border-none bg-transparent" />
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 4" className="border-none bg-transparent" />
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 5" className="border-none bg-transparent" />
          <PlaceholderImage aspectRatio="aspect-[3/1]" text="Logo 6" className="border-none bg-transparent" />
        </div>
      </div>
    </section>
  );
};
