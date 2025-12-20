import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Check, ShieldCheck, HardHat, Zap, Droplets, PenTool } from 'lucide-react';

const Pricing: React.FC = () => {
  const skilledProfessionals = [
    { name: "Carpenters", icon: <PenTool size={18} /> },
    { name: "Labourers", icon: <HardHat size={18} /> },
    { name: "Electricians", icon: <Zap size={18} /> },
    { name: "Plumbers", icon: <Droplets size={18} /> },
    { name: "Skilled Professionals", icon: <ShieldCheck size={18} /> }
  ];

  return (
    <section id="packages" className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-charcoal dark:text-white">
              Transparent Design Offerings
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 font-light text-lg">
              Clear, upfront pricing and professional execution for your dream space. 
              No hidden fees, just pure craftsmanship.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Design Only */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all flex flex-col"
          >
            <h3 className="text-2xl font-display font-bold text-charcoal dark:text-white mb-2">Interior Design</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-display font-bold text-accent-500">₹20</span>
              <span className="ml-2 text-neutral-500 dark:text-neutral-400 text-sm">per sq. ft.</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-600 dark:text-neutral-300">Space Planning & Layouts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-600 dark:text-neutral-300">Concept Moodboards</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-600 dark:text-neutral-300">Basic 2D Elevations</span>
              </li>
            </ul>
            <Button variant="outline" fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Enquire Now
            </Button>
          </motion.div>

          {/* Plan 2: Design + Consultancy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-charcoal dark:bg-neutral-900 border border-accent-500/30 shadow-2xl scale-105 z-10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent-500 bg-accent-500/10 px-3 py-1 rounded-full">Recommended</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Design + Consultancy</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-display font-bold text-accent-400">₹60</span>
              <span className="ml-2 text-neutral-400 text-sm">per sq. ft.</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">Everything in Interior Design</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">Photorealistic 3D Renders</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">Material & Furniture Selection</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">Site Visits & Quality Checks</span>
              </li>
            </ul>
            <Button fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Get Started
            </Button>
          </motion.div>

          {/* Plan 3: Turnkey & Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all flex flex-col"
          >
            <h3 className="text-2xl font-display font-bold text-charcoal dark:text-white mb-2">Turnkey Execution</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">Complete end-to-end projects handled by experts.</p>
            
            <div className="mb-8">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Skilled Workforce</p>
              <div className="grid grid-cols-1 gap-3">
                {skilledProfessionals.map((pro) => (
                  <div key={pro.name} className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                    <div className="text-accent-500">{pro.icon}</div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{pro.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 italic mb-6">
              *Pricing may vary based on project scope and materials used. Custom quotations available.
            </p>
            <Button variant="outline" fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Request Quotation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;