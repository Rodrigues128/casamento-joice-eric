import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Divider from './Divider';

const HERO_IMG = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Decoração floral romântica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush/70 via-blush/50 to-blush/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.p
          className="font-body text-base md:text-lg tracking-[0.25em] uppercase text-wine/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Vamos nos casar
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-wine leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Joicilene
          <span className="block text-sage italic text-3xl sm:text-4xl md:text-5xl my-2 md:my-4 font-accent">
            &
          </span>
          Eric
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6"
        >
          <Divider />
        </motion.div>

        <motion.p
          className="font-body text-sm md:text-base tracking-[0.35em] uppercase text-wine/70 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          19 de Setembro de 2026
        </motion.p>

        <motion.p
          className="font-accent italic text-lg md:text-xl text-wine/50 mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          "O amor não é olhar um para o outro, é olhar juntos na mesma direção."
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <Heart className="w-5 h-5 text-wine/30 mx-auto fill-wine/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}