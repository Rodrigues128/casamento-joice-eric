import { motion } from 'framer-motion';
import { Gift, ExternalLink } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const GIFT_LIST_URL = 'https://www.listadepresentes.com.br'; // Atualize com o link real

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
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Lista de Presentes
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Presenteie com Amor
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
          <p className="mt-6 font-body text-base text-wine/60 leading-relaxed max-w-md mx-auto">
            Se você deseja nos presentear, acesse nossa lista de presentes clicando no botão abaixo. Qualquer gesto é recebido com muito carinho.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href={GIFT_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wine hover:bg-wine-light text-blush font-body text-base tracking-wider px-10 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Gift className="w-5 h-5" />
            Ver Lista de Presentes
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}