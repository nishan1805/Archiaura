import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-1">
            <a href="#" className="mb-6 block">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/archiaura-logo-gold.png" 
                alt="Archiaura Logo" 
                className="h-14 w-auto object-contain brightness-110"
              />
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              Designing soulful, functional, and timeless interiors for modern living.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-accent-400 transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-accent-400 transition-colors">Residential Design</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Commercial Design</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Styling & Decor</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-display font-bold mb-6 tracking-wide">Newsletter</h4>
             <p className="text-sm text-neutral-400 mb-4 font-light">Design tips and trends, straight to your inbox.</p>
             <form className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Email address" 
                 className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-500 w-full"
               />
               <button className="bg-accent-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors">
                 Join
               </button>
             </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light">
          <p>&copy; {new Date().getFullYear()} Archiaura Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;