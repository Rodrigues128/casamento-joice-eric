import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';

import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const confirmationMessage = 'Olá! Confirmo minha presença no casamento da Joicilene e Eric.';
const confirmationWhatsAppUrl = `https://wa.me/556599256006?text=${encodeURIComponent(confirmationMessage)}`;
const confirmationDeadline = new Date('2026-08-10T23:59:59-04:00');

export default function RSVPSection() {
  const { ref, isVisible } = useScrollAnimation();
  const isConfirmationOpen = new Date() <= confirmationDeadline;

  return (
    <section id="presenca" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-xl mx-auto px-6">
        <header className="text-center mb-12">
          <motion.span
            className="font-body text-xs tracking-[0.4em] uppercase text-sage block mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            Confirmação
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-wine"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
          >
            Presença
          </motion.h2>
          <div className="mt-6">
            <Divider />
          </div>
          <p className="mt-6 font-body text-lg text-wine/60 italic leading-relaxed">
            Sua presença é o nosso melhor presente.<br /> Por favor, confirme até 10 de agosto.
          </p>
        </header>

        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-wine/5 shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          {isConfirmationOpen ? (
            <>
              <p className="font-body text-wine/65 text-lg leading-relaxed mb-8">
                Clique no botão abaixo para confirmar pelo WhatsApp com a mensagem pronta.
              </p>

              <a
                href={confirmationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-wine px-6 py-5 font-body text-lg text-white shadow-xl transition-all hover:bg-wine-light hover:shadow-2xl sm:w-auto sm:px-10"
              >
                <MessageCircle className="w-5 h-5" />
                Confirmar Minha Presença
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </>
          ) : (
            <p className="font-body text-wine/65 text-lg leading-relaxed">
              O prazo para confirmar presença encerrou em 10 de agosto.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
