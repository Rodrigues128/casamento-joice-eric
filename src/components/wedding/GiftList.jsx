import { motion } from 'framer-motion';
import { Gift, ExternalLink } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const listUrl = 'https://casamento-ld1o.listaideal.com.br/pt';

export default function GiftList() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="presentes" className="py-20 md:py-32 bg-blush" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-sage block mb-4">
            Lista de Presentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Presenteie com Amor
          </h2>
          <div className="mt-6">
            <Divider />
          </div>
          <p className="mt-8 font-body text-base text-wine/60 leading-relaxed max-w-md mx-auto">
            A sua presença é o nosso maior presente. Mas, se você deseja nos agraciar com algo mais, nossa lista está disponível no link abaixo.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href={listUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wine hover:bg-wine-light text-blush font-body text-base tracking-wider px-12 py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Gift className="w-5 h-5" />
            Ver nossa lista
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}