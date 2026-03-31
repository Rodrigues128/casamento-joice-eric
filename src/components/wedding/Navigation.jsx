import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Início' },
  { href: '#presentes', label: 'Presentes' },
  { href: '#contagem', label: 'Contagem' },
  { href: '#evento', label: 'Evento' },
  { href: '#recados', label: 'Recados' },
  { href: '#presenca', label: 'RSVP' },
  { href: '#galeria', label: 'Galeria' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-blush/90 backdrop-blur-md shadow-sm border-b border-wine/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleClick('#hero')}
            className="flex items-center gap-2"
          >
            <Heart className={`w-3.5 h-3.5 transition-colors duration-300 ${
              scrolled ? 'text-wine fill-wine/20' : 'text-wine/60 fill-wine/10'
            }`} />
            <span className={`font-display text-sm tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-wine' : 'text-wine/70'
            }`}>
              J & E
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-wine ${
                  scrolled ? 'text-wine/60' : 'text-wine/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-wine/70"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-blush/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-display text-2xl text-wine/80 hover:text-wine transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}