import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-white/10 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center z-50">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/archiaura-logo-gold.png" 
            alt="Archi&Aura Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-2xl font-display font-bold tracking-tight text-charcoal dark:text-white">
            Archi&Aura
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-charcoal/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-700/50">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-charcoal dark:hover:text-white hover:bg-white/80 dark:hover:bg-neutral-800 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-charcoal dark:hover:text-white hover:bg-white/80 dark:hover:bg-neutral-800 rounded-full transition-all"
          >
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://www.instagram.com/archiaura.spaces?igsh=aTJrZzRid2VucnFy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
          </motion.a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <motion.a
            href="https://www.instagram.com/archiaura.spaces?igsh=aTJrZzRid2VucnFy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-charcoal dark:text-white"
          >
            <Instagram size={20} />
          </motion.a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-charcoal dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-charcoal dark:text-white z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-charcoal pt-24 px-6 md:hidden z-40 flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-charcoal dark:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-display font-medium text-charcoal dark:text-white"
            >
              Contact
            </a>
            <div className="mt-8">
              <Button fullWidth onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
              }}>
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;