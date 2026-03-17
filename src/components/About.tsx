import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const services = [
    "Architecture & Design", "Plumbing", "Gas Services", "Kitchens & Bathrooms", 
    "Roofing", "Skylights", "Waterproofing", "Heating", "Solar", "Drain laying"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img 
              src="/about.jpg" 
              alt="R J Crouch Ltd Company Vehicle" 
              className="rounded-3xl shadow-2xl w-full h-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">40+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-bold text-sm uppercase tracking-wider">
              <ShieldCheck size={16} /> Trusted Christchurch Local
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Established in the Canterbury Region for Over 40 Years
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              R J Crouch Ltd can carry out all your plumbing needs. We are Certifying Plumbers and Gas fitters, serving Residential, Commercial, and Industrial clients across Christchurch.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From new homes and renovations to preventative maintenance and emergency repairs, our team brings decades of expertise to every job. We also specialize in roof repairs, custom-made flashing, blocked drains, and CCTV camera surveys.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-sky-100 p-2 rounded-lg text-sky-600">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-zinc-800">Certifying Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-sky-100 p-2 rounded-lg text-sky-600">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-zinc-800">Emergency Repairs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-zinc-400 text-lg">
              Comprehensive plumbing, gas, and roofing solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-2xl text-center hover:bg-sky-600 hover:border-sky-500 transition-all cursor-default group">
                <p className="font-bold text-sm md:text-base group-hover:text-white transition-colors">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
