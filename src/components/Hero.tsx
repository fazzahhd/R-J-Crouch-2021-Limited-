import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 -skew-x-12 translate-x-1/4 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-bold text-sm uppercase tracking-wider">
              <Star size={16} className="fill-sky-700" /> Top Rated Christchurch Plumbers
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 leading-[1.1]">
              R J Crouch <span className="text-sky-600">Plumbing</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-zinc-600 tracking-tight">
              Plumbers | Gasfitters | Roofers
            </p>
            
            <p className="text-lg text-zinc-500 max-w-lg leading-relaxed">
              Expert plumbing, gas, and roofing services in Christchurch for over 40 years. Quality workmanship guaranteed for residential and commercial projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-sky-600 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-700 transition-all shadow-lg shadow-sky-200 transform hover:scale-105"
              >
                Get a Free Quote <ArrowRight size={20} />
              </a>
              <a 
                href="tel:0275355163" 
                className="bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:border-sky-600 hover:text-sky-600 transition-all"
              >
                Call 027 535 5163
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-zinc-600 font-medium">
                <CheckCircle size={20} className="text-sky-500" /> Master Plumbers
              </div>
              <div className="flex items-center gap-2 text-zinc-600 font-medium">
                <CheckCircle size={20} className="text-sky-500" /> NZ Certified
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <PlaceholderImage aspectRatio="aspect-[4/5]" text="Insert Hero Action Photo Here" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-zinc-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-2xl text-sky-600">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-zinc-900">40+ Years</p>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider">In Canterbury</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
