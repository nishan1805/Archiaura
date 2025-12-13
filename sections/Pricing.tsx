import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Check } from 'lucide-react';
import { PackageTier } from '../types';

const tiers: { perRoom: PackageTier[]; fullHome: PackageTier[] } = {
  perRoom: [
    {
      name: "Essential",
      price: "₹25k",
      unit: "per room",
      features: ["Moodboard & Concept", "Furniture Layout", "Shopping List", "1 Revision Round"],
    },
    {
      name: "Signature",
      price: "₹45k",
      unit: "per room",
      features: ["Everything in Essential", "3D Visualization", "Detailed Elevation Drawings", "Material Samples", "2 Revision Rounds"],
      recommended: true
    },
    {
      name: "Premium",
      price: "₹65k",
      unit: "per room",
      features: ["Everything in Signature", "Styling Assistance", "Site Visits (3)", "Vendor Coordination", "Unlimited Revisions"],
    }
  ],
  fullHome: [
    {
      name: "Standard",
      price: "₹150",
      unit: "per sq.ft",
      features: ["Space Planning", "2D Layouts", "Basic Material Palette", "Standard Lighting Plan"],
    },
    {
      name: "Turnkey Pro",
      price: "₹250",
      unit: "per sq.ft",
      features: ["Advanced 3D Views", "Custom Joinery Details", "Premium Material Selection", "Full Project Management", "White Glove Handover"],
      recommended: true
    },
    {
      name: "Luxury",
      price: "Custom",
      unit: "Consultation",
      features: ["Bespoke Furniture Design", "Global Sourcing", "Art Curation", "Smart Home Integration", "Dedicated Design Lead"],
    }
  ]
};

const Pricing: React.FC = () => {
  const [isFullHome, setIsFullHome] = useState(false);

  return (
    <section id="packages" className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-charcoal dark:text-white">Transparent Design Packages</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Choose a package that fits your scope. No hidden costs, just exceptional design.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex bg-white dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700 relative">
            <div className="absolute inset-y-1 bg-accent-500 rounded-full transition-all duration-300 w-[calc(50%-4px)]" 
                 style={{ left: isFullHome ? 'calc(50% + 2px)' : '4px' }} />
            <button 
              onClick={() => setIsFullHome(false)}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors ${!isFullHome ? 'text-white' : 'text-neutral-600 dark:text-neutral-400 hover:text-charcoal dark:hover:text-white'}`}
            >
              Per Room
            </button>
            <button 
              onClick={() => setIsFullHome(true)}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors ${isFullHome ? 'text-white' : 'text-neutral-600 dark:text-neutral-400 hover:text-charcoal dark:hover:text-white'}`}
            >
              Full Home
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(isFullHome ? tiers.fullHome : tiers.perRoom).map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                relative p-8 rounded-3xl bg-white dark:bg-neutral-800 border transition-all duration-300
                ${tier.recommended 
                  ? 'border-accent-500 ring-2 ring-accent-500/20 shadow-xl scale-105 z-10' 
                  : 'border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-md'
                }
              `}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-display font-bold text-charcoal dark:text-white">{tier.price}</span>
                <span className="ml-2 text-neutral-500 dark:text-neutral-400 text-sm">/ {tier.unit}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                fullWidth 
                variant={tier.recommended ? 'primary' : 'outline'}
                className={tier.recommended ? '' : 'dark:border-neutral-600 dark:text-white dark:hover:border-accent-500 dark:hover:text-accent-500'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
              >
                Choose {tier.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;