import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const projects = [
  {
    id: 1,
    title: "The Earth House",
    location: "Bangalore, Indiranagar",
    description: "A sustainable 3BHK using reclaimed teak and terracotta.",
    image: "https://picsum.photos/800/1000?random=10"
  },
  {
    id: 2,
    title: "Azure Penthouse",
    location: "Mumbai, Bandra",
    description: "Modern luxury with panoramic sea views and minimal brass accents.",
    image: "https://picsum.photos/800/1000?random=11"
  },
  {
    id: 3,
    title: "Cafe Sombra",
    location: "New Delhi, HKV",
    description: "A boutique coffee space playing with light and shadow.",
    image: "https://picsum.photos/800/1000?random=12"
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-surface-light dark:bg-surface-dark overflow-hidden">
      {/* Marquee */}
      <div className="mb-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-4 flex gap-12 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <span key={i} className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">
                ARCHIAURA STUDIO WORK
              </span>
            ))}
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <span key={`duplicate-${i}`} className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">
                ARCHIAURA STUDIO WORK
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2 text-charcoal dark:text-white">Selected Works</h2>
            <p className="text-neutral-500 dark:text-neutral-400">Curated spaces designed for life.</p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline">View All Projects</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-4 py-2 bg-white/90 dark:bg-charcoal/90 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-white">
                        View Case Study
                    </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-charcoal dark:text-white">{project.title}</h3>
              <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-1">{project.location}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
            <Button variant="outline" fullWidth>View All Projects</Button>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Work;