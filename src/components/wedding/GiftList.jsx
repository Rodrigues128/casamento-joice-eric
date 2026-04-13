import { motion } from 'framer-motion';
import { Gift, ExternalLink, MessageCircle } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const listUrl = 'https://casamento-ld1o.listaideal.com.br/pt';
const leonaraWhatsAppUrl = "https://wa.me/556599398303?text=Ol%C3%A1%2C%20Leonara.%20Sou%20convidado(a)%20do%20casamento%20da%20Joicilene%20e%20Eric%2C%20gostaria%20de%20olhar%20a%20lista%20de%20presente%20dispon%C3%ADvel.";

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
            A sua presença é o nosso maior presente. Mas, se você deseja nos agraciar com algo mais, nossas opções de listas estão disponíveis abaixo.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href={listUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-wine hover:bg-wine-light text-blush font-body text-base tracking-wider px-12 py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto justify-center"
            >
              <Gift className="w-5 h-5" />
              Lista Online
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href={leonaraWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-wine text-wine hover:bg-wine/5 font-body text-base tracking-wider px-8 py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Loja Física Gazin - Leonara
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}