import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Archiaura completely transformed our chaotic apartment into a sanctuary. The attention to detail, especially the custom woodwork, is phenomenal.",
    author: "Priya & Rahul",
    project: "4BHK Apartment, Whitefield",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    id: 2,
    quote: "Professional, punctual, and incredibly creative. They understood our need for a pet-friendly yet elegant home perfectly.",
    author: "Sneha Kapoor",
    project: "Villa Renovation, Koramangala",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    id: 3,
    quote: "The team balanced our budget constraints with our luxury aspirations beautifully. Highly recommend for anyone looking for modern Indian aesthetics.",
    author: "Arjun Mehta",
    project: "Office Space, Indiranagar",
    image: "https://picsum.photos/100/100?random=22"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Before/After or Featured Image) */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-neutral-900/20 z-10" />
             <img src="https://picsum.photos/800/1000?random=30" alt="Featured Interior" className="w-full h-full object-cover" />
             <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">Featured Transformation</p>
                    <p className="text-charcoal dark:text-white">Living Room, Sobha City</p>
                </div>
             </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <Quote className="text-accent-200 dark:text-accent-900 w-24 h-24 absolute -top-12 -left-6 -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-3xl font-display leading-relaxed text-charcoal dark:text-neutral-200">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-500"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-12">
              <button onClick={prev} className="p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-3 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;