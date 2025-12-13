import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Lightbulb, ClipboardCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-charcoal dark:text-white">
            Comprehensive Design Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            From single-room styling to full-scale renovation management, we handle the details so you can enjoy the transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Card A: Interior Design (Span 2) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-2xl flex items-center justify-center mb-6 text-accent-600 dark:text-accent-400">
                <LayoutTemplate size={24} />
              </div>
              <h3 className="text-2xl font-display font-medium mb-3 text-charcoal dark:text-white">Full Interior Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
                Complete conceptualization, space planning, and 3D visualization. We create cohesive environments tailored to your lifestyle.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>Space Planning & Layouts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>Photorealistic 3D Renders</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>FF&E Selection</li>
              </ul>
            </div>
            <img 
              src="https://picsum.photos/800/600?random=4" 
              alt="Interior Design" 
              className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mask-image-linear-to-l" 
            />
          </motion.div>

          {/* Card B: Styling (Span 1) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-charcoal dark:bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden group text-white dark:text-charcoal"
          >
            <div className="w-12 h-12 bg-white/10 dark:bg-charcoal/10 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-display font-medium mb-3">Styling & Decor</h3>
            <p className="text-white/70 dark:text-charcoal/70 mb-4 text-sm">
              The finishing touches that make a house a home.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Art Curation', 'Textiles', 'Lighting', 'Plants'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 dark:bg-charcoal/10 rounded-full text-xs font-medium backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card C: Project Management (Span 3) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-2xl flex items-center justify-center mb-6 text-charcoal dark:text-white">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="text-2xl font-display font-medium mb-3 text-charcoal dark:text-white">Turnkey Execution</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We manage the chaos so you don't have to. From contractor coordination to final installation, we ensure the design intent is perfectly realized on site.
              </p>
            </div>
            <div className="flex-1 w-full bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 border border-neutral-100 dark:border-neutral-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Live Project Status</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Concept Approval", done: true },
                  { label: "Material Sourcing", done: true },
                  { label: "Site Execution", done: true },
                  { label: "Final Styling", done: false }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${step.done ? 'bg-accent-500 border-accent-500 text-white' : 'border-neutral-300 dark:border-neutral-600'}`}>
                      {step.done && <span className="text-[10px]">✓</span>}
                    </div>
                    <span className={`text-sm ${step.done ? 'text-charcoal dark:text-white font-medium' : 'text-neutral-400'}`}>{step.label}</span>
                    {step.done && <div className="ml-auto h-0.5 w-12 bg-accent-500/20"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;