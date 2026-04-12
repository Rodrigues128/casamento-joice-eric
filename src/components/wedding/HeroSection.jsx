import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Divider from './Divider';
import { WEDDING_CONFIG } from '@/lib/wedding-config';

export default function HeroSection() {
  const { bride, groom } = WEDDING_CONFIG.couple;
  const { formattedDate } = WEDDING_CONFIG.event;
  const bgImage = WEDDING_CONFIG.images.hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="Wedding Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-blush/80 via-blush/40 to-blush/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          className="font-display text-5xl sm:text-6xl md:text-8xl text-wine leading-tight break-words"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <span className="inline-block">{bride}</span>
          <span className="block text-sage italic text-3xl sm:text-4xl md:text-5xl my-4 font-accent">&</span>
          <span className="inline-block">{groom}</span>
        </motion.h1>

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <Divider />
        </motion.div>

        <motion.p 
          className="font-body text-base md:text-xl tracking-[0.4em] uppercase text-wine/70 mt-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        >
          {formattedDate}
        </motion.p>

        <motion.p 
          className="font-accent italic text-lg md:text-2xl text-wine/50 mt-10 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        >
          "O amor não é olhar um para o outro, é olhar juntos na mesma direção."
        </motion.p>

        <motion.div className="mt-16" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
          <Heart className="w-6 h-6 text-wine/20 fill-wine/5 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
