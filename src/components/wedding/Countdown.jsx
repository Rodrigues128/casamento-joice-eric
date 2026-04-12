import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';
import { WEDDING_CONFIG } from '@/lib/wedding-config';

const calculateTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();
  
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

function TimeUnit({ value, label, delay }) {
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}>
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-2xl bg-white/60 backdrop-blur-sm border border-wine/10 flex items-center justify-center shadow-sm">
        <span className="font-display text-2xl sm:text-3xl md:text-5xl text-wine">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 font-body text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-wine/50 font-bold">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const { date, formattedDate, formattedTime } = WEDDING_CONFIG.event;
  const [time, setTime] = useState(() => calculateTimeLeft(date));
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft(date));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <section id="contagem" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <header className="mb-12">
          <motion.p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3"
            initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
            Contagem Regressiva
          </motion.p>
          <motion.h2 className="font-display text-3xl md:text-5xl text-wine"
            initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
            Falta Pouco!
          </motion.h2>
          <div className="mt-6"><Divider /></div>
        </header>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mt-12">
          <TimeUnit value={time.days} label="Dias" delay={0.2} />
          <TimeUnit value={time.hours} label="Horas" delay={0.3} />
          <TimeUnit value={time.minutes} label="Min" delay={0.4} />
          <TimeUnit value={time.seconds} label="Seg" delay={0.5} />
        </div>

        <motion.p className="mt-12 font-accent italic text-lg md:text-xl text-wine/40"
          initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          {formattedDate} • {formattedTime}
        </motion.p>
      </div>
    </section>
  );
}
