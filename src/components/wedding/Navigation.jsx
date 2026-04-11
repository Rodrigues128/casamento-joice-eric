import { useState, useEffect } from 'react';
import { motion as m, AnimatePresence as Ap } from 'framer-motion';
import { Heart, Menu, X, Calendar, MapPin, Gift, MessageSquare, Home } from 'lucide-react';
import { WEDDING_CONFIG } from '@/lib/wedding-config';

/**
 * Links de Navegação do Site
 */
const NAV_LINKS = [
  { href: '#hero', label: 'Início', icon: Home },
  { href: '#presentes', label: 'Presentes', icon: Gift },
  { href: '#contagem', label: 'Contagem', icon: Calendar },
  { href: '#evento', label: 'Evento', icon: MapPin },
  { href: '#presenca', label: 'RSVP', icon: MessageSquare },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { initials, names } = WEDDING_CONFIG.couple;

  // Monitora o scroll para mudar o estilo da barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll do fundo quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  /**
   * Navegação suave para as seções
   */
  const scrollToSection = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Pequeno delay para permitir que o menu feche primeiro
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <m.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Iniciais */}
          <button onClick={() => scrollToSection('#hero')} className="flex items-center gap-2 group relative z-[110]">
            <div className="bg-wine/5 p-1.5 rounded-full group-hover:bg-wine/10 transition-colors">
              <Heart className={`w-4 h-4 ${scrolled ? 'text-wine fill-wine' : 'text-wine'}`} />
            </div>
            <span className={`font-display text-lg font-bold tracking-tighter ${scrolled ? 'text-wine' : 'text-wine/90'}`}>
              {initials.split('&')[0]}<span className="text-sage mx-0.5">&</span>{initials.split('&')[1]}
            </span>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => scrollToSection(link.href)}
                className={`font-body text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-wine relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-wine hover:after:w-full after:transition-all ${
                  scrolled ? 'text-wine/70' : 'text-wine/80'
                }`}>
                {link.label}
              </button>
            ))}
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileOpen(true)} 
              className="p-2 text-wine active:scale-90 transition-transform"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-8 h-8 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </m.nav>

      {/* Menu Mobile - Gaveta Profissional */}
      <Ap>
        {mobileOpen && (
          <>
            <m.div className="fixed inset-0 z-[140] bg-wine/20 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />

            <m.div className="fixed top-0 right-0 bottom-0 z-[150] w-[300px] bg-blush shadow-2xl flex flex-col border-l border-wine/5"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}>
              
              <div className="p-8 flex items-center justify-between border-b border-wine/5">
                <span className="font-display text-2xl text-wine font-bold italic">Navegação</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 bg-wine/5 rounded-full text-wine"><X className="w-6 h-6" /></button>
              </div>

              <div className="flex-grow py-8 px-4 overflow-y-auto">
                <div className="space-y-2">
                  {NAV_LINKS.map((link, i) => (
                    <m.button key={link.href} onClick={() => scrollToSection(link.href)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/40 text-wine/80 hover:text-wine transition-all group"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.2 }}>
                      <div className="p-2 rounded-xl bg-white/60 group-hover:bg-wine group-hover:text-white transition-colors">
                        <link.icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="font-body text-lg font-bold tracking-wide">{link.label}</span>
                    </m.button>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-wine/5 text-center">
                <p className="font-accent italic text-wine/40 text-sm mb-2">Com carinho,</p>
                <p className="font-display text-xl text-wine/60">{names}</p>
              </div>
            </m.div>
          </>
        )}
      </Ap>
    </>
  );
}
