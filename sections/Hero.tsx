import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const rotate = useTransform(scrollY, [0, 500], [6, 12]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-100/30 dark:bg-accent-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neutral-200/40 dark:bg-neutral-800/20 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal dark:text-white leading-[1.1] mb-6">
            We craft <span className="text-accent-500 italic font-serif">soulful</span> interiors.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-md">
            Tailored residential and boutique commercial design. End-to-end, human-led, and thoughtfully modern.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth'})}>
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Visual - 3D Moodboard Effect */}
        <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block perspective-1000">
          <motion.div 
            style={{ rotateY: -12, rotateX: 6, rotateZ: rotate, y: y2 }}
            className="absolute top-10 right-10 w-3/4 h-3/4 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-white/20 z-10"
          >
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Interior Concept" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div 
            style={{ rotateY: -8, rotateX: 12, rotateZ: -4, y: y1 }}
            className="absolute bottom-10 left-10 w-2/3 h-2/3 bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-white/20 z-20"
          >
             <div className="p-4 grid grid-cols-2 gap-2 h-full">
                <img src="https://picsum.photos/400/400?random=2" className="rounded-lg object-cover h-full w-full" alt="Material 1" />
                <div className="flex flex-col gap-2">
                   <div className="h-1/2 bg-accent-200 dark:bg-accent-800 rounded-lg flex items-center justify-center p-4">
                      <span className="font-display text-accent-800 dark:text-accent-100 text-xs tracking-widest uppercase">Brass</span>
                   </div>
                   <img src="https://picsum.photos/400/400?random=3" className="rounded-lg object-cover h-1/2 w-full" alt="Material 2" />
                </div>
             </div>
          </motion.div>

          {/* Decorative Floating Elements */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-0 w-24 h-24 bg-accent-500 rounded-full blur-2xl opacity-20 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;