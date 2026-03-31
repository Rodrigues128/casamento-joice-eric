import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const WEDDING_DATE = new Date('2026-09-19T19:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-white/60 backdrop-blur-sm border border-wine/10 flex items-center justify-center shadow-sm">
        <span className="font-display text-3xl md:text-5xl text-wine">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 font-body text-xs md:text-sm tracking-[0.2em] uppercase text-wine/50">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contagem" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Contagem Regressiva
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Falta Pouco!
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8 mt-12">
          <TimeUnit value={time.days} label="Dias" delay={0.2} />
          <TimeUnit value={time.hours} label="Horas" delay={0.3} />
          <TimeUnit value={time.minutes} label="Min" delay={0.4} />
          <TimeUnit value={time.seconds} label="Seg" delay={0.5} />
        </div>

        <motion.p
          className="mt-12 font-accent italic text-lg text-wine/50"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          19 de Setembro de 2026 • 19h00
        </motion.p>
      </div>
    </section>
  );
}