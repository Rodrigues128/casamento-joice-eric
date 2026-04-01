import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';
import { WEDDING_CONFIG } from '@/lib/wedding-config';

/**
 * Seção Nossa História
 * Exibe a narrativa do casal com fotos e animações
 */
export default function OurStory() {
  const { ref, isVisible } = useScrollAnimation();
  const { storyMain, storyDetail } = WEDDING_CONFIG.images;
  const { names } = WEDDING_CONFIG.couple;

  return (
    <section id="historia" className="py-20 md:py-32 bg-white/50 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-16">
          <motion.span className="font-body text-sm tracking-[0.3em] uppercase text-sage block mb-4"
            initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
            Nossa Jornada
          </motion.span>
          <motion.h2 className="font-display text-3xl md:text-5xl text-wine"
            initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
            Nossa História
          </motion.h2>
          <div className="mt-6"><Divider /></div>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Coluna de Imagens com Efeitos */}
          <motion.div className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img src={storyMain} alt="Momentos" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-wine/5 mix-blend-overlay" />
            </div>
            
            {/* Elemento Decorativo */}
            <motion.div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 bg-blush rounded-3xl -z-10 shadow-lg"
              animate={{ rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} />
            
            {/* Foto Flutuante Detalhe */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 aspect-square w-24 md:w-32 overflow-hidden rounded-2xl shadow-lg hidden md:block border-4 border-white">
              <img src={storyDetail} alt="Detalhe" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Coluna de Texto Narrative */}
          <motion.div className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>
            <h3 className="font-display text-2xl text-wine mb-4 italic">"Onde tudo começou..."</h3>
            <p className="font-body text-wine/70 text-lg leading-relaxed first-letter:text-4xl first-letter:font-display first-letter:mr-2 first-letter:float-left">
              Nossa história começou de forma simples, mas o destino tinha planos maiores para nós. O que começou com conversas tímidas logo se transformou em uma conexão profunda e inabalável.
            </p>
            <p className="font-body text-wine/70 text-lg leading-relaxed">
              Cada viagem, cada risada compartilhada e cada desafio superado nos trouxe até aqui. Descobrimos um no outro não apenas o amor, mas um melhor amigo e um companheiro de vida.
            </p>
            <p className="font-body text-wine/70 text-lg leading-relaxed italic border-l-2 border-wine/10 pl-4 py-1">
              "Prometemos caminhar juntos, de mãos dadas, celebrando cada conquista e apoiando um ao outro em cada passo."
            </p>
            <div className="pt-4">
              <p className="font-accent text-wine text-2xl font-bold">Com amor, {names}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
