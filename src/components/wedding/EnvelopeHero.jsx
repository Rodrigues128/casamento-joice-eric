import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

export default function EnvelopeHero({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => onOpen(), 1200);
  };

  return (
    <AnimatePresence>
      {!opened ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blush"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Envelope */}
          <motion.div
            className="relative cursor-pointer group"
            onClick={handleOpen}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Envelope body */}
            <div className="w-52 h-36 md:w-64 md:h-44 bg-blush-dark/40 rounded-md shadow-lg relative overflow-hidden border border-wine/10">
              {/* Envelope flap */}
              <div className="absolute inset-x-0 top-0 h-1/2">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
                    background: 'linear-gradient(135deg, #D1AAA2 0%, #E8D7D0 100%)',
                  }}
                />
              </div>
              {/* Seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-wine flex items-center justify-center shadow-md z-10">
                <span className="text-blush font-display text-sm md:text-base tracking-wider">
                  J&E
                </span>
              </div>
              {/* Bottom fold lines */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 100%, 50% 40%, 100% 100%)',
                  background: 'rgba(209, 170, 162, 0.3)',
                }}
              />
            </div>
          </motion.div>

          {/* Names */}
          <motion.div
            className="mt-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-display text-4xl md:text-5xl text-wine tracking-wide">
              Joicilene <span className="text-sage italic text-3xl md:text-4xl">&</span> Eric
            </h1>
            <p className="mt-4 font-body text-sm md:text-base tracking-[0.3em] uppercase text-wine/70">
              19 de Setembro de 2026
            </p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-12 bg-wine/20" />
              <Heart className="w-2.5 h-2.5 text-wine/30 fill-wine/20" />
              <div className="h-px w-12 bg-wine/20" />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={handleOpen}
            className="mt-8 font-accent text-sm italic text-wine/60 hover:text-wine transition-colors duration-300 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Clique para abrir o convite
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}