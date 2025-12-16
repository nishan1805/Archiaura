import React from 'react';
import { motion } from 'framer-motion';
import { PencilRuler, MonitorPlay, Palette, Hammer, Sparkles, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal dark:text-white mb-6">
              Comprehensive Design Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              We guide you through a seamless journey from the first sketch to the final flourish. 
              Our end-to-end process ensures your vision is realized without the stress.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">

          {/* 1. Design Consultation & Planning (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-2xl flex items-center justify-center mb-6 text-accent-600 dark:text-accent-400">
                  <PencilRuler size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium text-charcoal dark:text-white mb-3">Design Consultation & Planning</h3>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
                  We begin by understanding your lifestyle, needs, and aspirations. Our architects create precise 2D layouts to optimize space, flow, and utility before we talk aesthetics.
                </p>
              </div>
              <div className="mt-8">
                <span className="text-sm font-medium text-accent-600 dark:text-accent-400 flex items-center gap-2">
                  Phase 01 <ArrowRight size={16} />
                </span>
              </div>
            </div>
            {/* Background Decorative Image */}
            <img 
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Blueprints" 
              className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-10 dark:opacity-5 group-hover:scale-105 transition-transform duration-700 mask-image-linear-to-l" 
            />
          </motion.div>

          {/* 2. 3D Visualization (Span 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-charcoal dark:bg-neutral-950 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <MonitorPlay size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-3">3D Visualization</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Walk through your home before it's built. Our photorealistic renders visualize lighting, textures, and colors, leaving nothing to chance.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          </motion.div>

          {/* 3. Material Selection (Span 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1 bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700 group hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center mb-6 text-accent-600 dark:text-accent-400">
              <Palette size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-medium text-charcoal dark:text-white mb-3">Material Selection</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-8 leading-relaxed">
              Tactile experiences matter. We curate specific finishes, fabrics, and woods sourced from trusted global and local artisans.
            </p>
            <div className="flex gap-[-8px]">
              <div className="h-10 w-10 rounded-full bg-[#E8DCC4] ring-2 ring-white dark:ring-neutral-800 shadow-sm" title="Marble"></div>
              <div className="h-10 w-10 rounded-full bg-[#8B5E3C] -ml-3 ring-2 ring-white dark:ring-neutral-800 shadow-sm" title="Teak"></div>
              <div className="h-10 w-10 rounded-full bg-[#707070] -ml-3 ring-2 ring-white dark:ring-neutral-800 shadow-sm" title="Concrete"></div>
              <div className="h-10 w-10 rounded-full bg-[#D4AF37] -ml-3 ring-2 ring-white dark:ring-neutral-800 shadow-sm flex items-center justify-center text-[10px] text-white font-medium" title="Brass">+</div>
            </div>
          </motion.div>

          {/* 4. Turnkey Execution (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-accent-50 dark:bg-neutral-800 rounded-3xl p-8 border border-accent-100 dark:border-neutral-700 flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-white dark:bg-neutral-700 rounded-2xl flex items-center justify-center mb-6 text-accent-600 dark:text-white shadow-sm">
                <Hammer size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium text-charcoal dark:text-white mb-3">Turnkey Execution</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                We coordinate contractors, vendors, and timelines so you don't have to. From civil work to joinery installation, we ensure the design intent is perfectly realized on site.
              </p>
              <div className="flex gap-2 text-xs font-medium text-accent-700 dark:text-accent-300">
                <span className="px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full">Project Management</span>
                <span className="px-3 py-1 bg-white/60 dark:bg-black/20 rounded-full">Quality Control</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] rounded-2xl overflow-hidden relative shadow-sm">
              <img 
                src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Construction Site" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          {/* 5. Styling & Handover (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-3 lg:col-span-2 bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-100 dark:border-neutral-700 flex flex-col group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
               <img 
                src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Styled Interior"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               <div className="absolute bottom-6 left-6 text-white">
                 <Sparkles size={24} strokeWidth={1.5} className="mb-2" />
                 <h3 className="text-2xl font-display font-medium">Styling & Handover</h3>
               </div>
            </div>
            <div className="p-8">
               <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                 The final layer makes a house a home. We place every rug, art piece, and artifact to ensure your space feels warm, lived-in, and complete from the moment you step in.
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;