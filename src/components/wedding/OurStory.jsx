import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const STORY_IMG = 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop';
const DETAIL_IMG = 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop';

export default function OurStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="historia" className="py-20 md:py-32 bg-white/50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Nossa Jornada
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Nossa História
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={STORY_IMG}
                alt="Nossa história"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wine/10 mix-blend-overlay" />
            </div>
            {/* Floating decoration */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-blush rounded-2xl -z-10 shadow-lg"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <div className="absolute -top-6 -left-6 aspect-square w-32 overflow-hidden rounded-xl shadow-lg hidden md:block border-4 border-white">
              <img
                src={DETAIL_IMG}
                alt="Detalhe romântico"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl text-wine mb-4 italic">
              "Onde tudo começou..."
            </h3>
            <p className="font-body text-wine/70 text-base md:text-lg leading-relaxed first-letter:text-4xl first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:text-wine/40">
              Nossa história começou de forma simples, mas o destino tinha planos maiores para nós. O que começou com conversas tímidas logo se transformou em uma conexão profunda e inabalável.
            </p>
            <p className="font-body text-wine/70 text-base md:text-lg leading-relaxed">
              Cada viagem, cada risada compartilhada e cada desafio superado nos trouxe até aqui. Descobrimos um no outro não apenas o amor, mas um melhor amigo, um companheiro de vida e um porto seguro.
            </p>
            <p className="font-body text-wine/70 text-base md:text-lg leading-relaxed italic border-l-2 border-wine/10 pl-4 py-1">
              "Prometemos caminhar juntos, de mãos dadas, celebrando cada conquista e apoiando um ao outro em cada passo da nossa jornada."
            </p>
            <div className="pt-4">
              <p className="font-accent text-wine text-2xl">Com amor, Joicilene & Eric</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
