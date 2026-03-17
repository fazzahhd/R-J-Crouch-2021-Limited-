import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    location: "Christchurch",
    text: "Tom and his team were fantastic. They fixed our leaking roof and sorted out a plumbing issue we'd had for months. Highly recommend their professionalism and quality of work.",
    rating: 5
  },
  {
    id: 2,
    author: "David L.",
    location: "Sydenham",
    text: "Excellent service. R J Crouch Plumbing handled our kitchen renovation gasfitting perfectly. They were on time, clean, and very knowledgeable. Best plumbers in Canterbury.",
    rating: 5
  },
  {
    id: 3,
    author: "James W.",
    location: "Christchurch",
    text: "Quick response to an emergency leak. Tom was very helpful and got everything sorted within the hour. Fair pricing and great communication.",
    rating: 5
  }
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">What Our Clients Say</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            We pride ourselves on quality workmanship and customer satisfaction.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-lg border border-zinc-100 text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-lg border border-zinc-100 text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-sky-50 rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 text-sky-200" size={48} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-zinc-800 italic mb-8 leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg">{reviews[currentIndex].author}</h4>
                  <p className="text-sky-600 font-medium">{reviews[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-6">Give us a review and see all reviews on Builderscrack</p>
          <a 
            href="https://builderscrack.co.nz/tradies/4hdxw53w/r-j-crouch-2021-limited" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all transform hover:scale-105"
          >
            View All Reviews on Builderscrack
          </a>
        </div>
      </div>
    </section>
  );
};
