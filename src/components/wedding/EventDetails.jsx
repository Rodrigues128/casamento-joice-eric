import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Navigation, ExternalLink } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';
import { WEDDING_CONFIG } from '@/lib/wedding-config';

function DetailCard({ icon: Icon, title, children, delay, action }) {
  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-wine/5 shadow-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="w-14 h-14 rounded-2xl bg-wine/5 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-wine/70" />
      </div>
      <h3 className="font-display text-2xl text-wine mb-3">{title}</h3>
      <div className="font-body text-base text-wine/60 leading-relaxed flex-grow">
        {children}
      </div>
      {action && (
        <div className="mt-6 pt-6 border-t border-wine/5">
          <a href={action.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold text-wine hover:text-wine-light transition-colors uppercase tracking-[0.2em] gap-2">
            {action.icon && <action.icon className="w-3.5 h-3.5" />}
            {action.label}
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function EventDetails() {
  const { ref, isVisible } = useScrollAnimation();
  const { formattedDate, formattedTime, location } = WEDDING_CONFIG.event;

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Joicilene+%26+Eric&dates=20260912T220000Z/20260913T010000Z&details=Celebração+do+casamento+de+Joicilene+e+Eric&location=${encodeURIComponent(location.address)}&sf=true&output=xml`;

  return (
    <section id="evento" className="py-20 md:py-32 bg-blush" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-16">
          <motion.span className="font-body text-sm tracking-[0.3em] uppercase text-sage block mb-4"
            initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
            Informações
          </motion.span>
          <motion.h2 className="font-display text-3xl md:text-5xl text-wine"
            initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
            Detalhes do Evento
          </motion.h2>
          <div className="mt-6"><Divider /></div>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DetailCard icon={Calendar} title="Quando" delay={0.1}
            action={{ label: "Adicionar à Agenda", href: calendarUrl, icon: ExternalLink }}>
            <p className="font-display text-wine text-xl">{formattedDate}</p>
            <p className="mt-1">Sábado • Celebração às {formattedTime}</p>
          </DetailCard>

          <DetailCard icon={MapPin} title="Onde" delay={0.2}
            action={{ label: "Como chegar (GPS)", href: location.googleMapsUrl, icon: Navigation }}>
            <p className="font-display text-wine text-xl">{location.name}</p>
            <p className="mt-1">{location.address}</p>
            <p>{location.city}</p>
          </DetailCard>
        </div>

        <motion.div className="mt-16 bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 md:p-8 border border-wine/5 shadow-xl"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6 px-4">
            <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="font-body text-xs font-bold text-wine/50 uppercase tracking-[0.3em]">Localização em Tempo Real</span>
          </div>
          <div className="rounded-[1.5rem] overflow-hidden h-80 md:h-[450px] shadow-inner grayscale-[30%] hover:grayscale-0 transition-all duration-700">
            <iframe title="Mapa do Evento" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.544773823485!2d-57.68233512411634!3d-16.063162729094033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939aff442a3236a3%3A0xb4be64d524514132!2sEspa%C3%A7o%20D'Rocha!5e0!3m2!1spt-BR!2sbr!4v1712851163462!5m2!1spt-BR!2sbr" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
