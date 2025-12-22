import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/7578546/7578546-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
            alt="Interior Background" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlay - Dark/Warm for readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.1] mb-8 drop-shadow-xl">
            We craft <span className="italic font-serif text-accent-200">soulful</span> interiors.
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Tailored residential and boutique commercial design. End-to-end, human-led, and thoughtfully modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-charcoal hover:border-white" 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth'})}
            >
              View Gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;