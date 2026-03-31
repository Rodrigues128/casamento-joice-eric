import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Church, PartyPopper } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const VENUE_IMG = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop';

function DetailCard({ icon: Icon, title, children, delay }) {
  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-wine/5 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="w-12 h-12 rounded-full bg-wine/5 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-wine/70" />
      </div>
      <h3 className="font-display text-xl text-wine mb-2">{title}</h3>
      <div className="font-body text-base text-wine/60 leading-relaxed">{children}</div>
    </motion.div>
  );
}

export default function EventDetails() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="evento" className="py-20 md:py-32 bg-blush" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Informações
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Detalhes do Evento
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
        </motion.div>

        {/* Venue image */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={VENUE_IMG}
            alt="Local do casamento"
            className="w-full h-56 md:h-80 object-cover"
          />
        </motion.div>

        {/* Detail cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <DetailCard icon={Calendar} title="Data" delay={0.1}>
            <p>Sábado</p>
            <p className="font-display text-wine text-lg">19 de Setembro de 2026</p>
          </DetailCard>
          <DetailCard icon={Clock} title="Horário" delay={0.2}>
            <p>Celebração às 19h00</p>
          </DetailCard>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-wine/5 shadow-sm">
            <div className="flex items-center gap-2 mb-4 px-2">
              <MapPin className="w-4 h-4 text-wine/60" />
              <span className="font-body text-sm text-wine/60">Como Chegar</span>
            </div>
            <div className="rounded-xl overflow-hidden h-64 md:h-80">
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.65!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}