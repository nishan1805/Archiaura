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
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    spaceImage: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    quote: "Professional, punctual, and incredibly creative. They understood our need for a pet-friendly yet elegant home perfectly.",
    author: "Sneha Kapoor",
    project: "Villa Renovation, Koramangala",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    spaceImage: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    quote: "The team balanced our budget constraints with our luxury aspirations beautifully. Highly recommend for anyone looking for modern Indian aesthetics.",
    author: "Arjun Mehta",
    project: "Office Space, Indiranagar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    spaceImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-charcoal dark:text-white">
          Our Happy Clients
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Dynamic Interior Image) */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
             <AnimatePresence mode="wait">
               <motion.img 
                  key={currentIndex}
                  src={testimonials[currentIndex].spaceImage} 
                  alt="Client Interior Space" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
               />
             </AnimatePresence>
             <div className="absolute inset-0 bg-neutral-900/10 z-10" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <Quote className="text-accent-200 dark:text-accent-900/50 w-32 h-32 absolute -top-16 -left-10 -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-3xl font-display leading-relaxed italic text-charcoal dark:text-neutral-200">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent-500"
                  />
                  <div>
                    <h4 className="font-bold font-display text-lg text-charcoal dark:text-white">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-12">
              <button onClick={prev} className="p-4 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-4 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white">
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