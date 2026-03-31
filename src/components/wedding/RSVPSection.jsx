import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, Loader2 } from 'lucide-react';
import { weddingApi } from '@/api/weddingApi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('0');
  const [recado, setRecado] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      await weddingApi.entities.RSVP.create({
        guest_name: name.trim(),
        guests_count: parseInt(guests) || 0,
        recado: recado.trim(),
        confirmed: true,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit RSVP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="presenca" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Confirmação
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Confirme sua Presença
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
          <p className="mt-6 font-body text-base text-wine/60 leading-relaxed">
            Sua presença é o melhor presente que poderíamos receber. Por favor, confirme até 10 de Setembro de 2026.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-wine/5 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-sage" />
            </div>
            <h3 className="font-display text-2xl text-wine mb-2">Obrigado!</h3>
            <p className="font-body text-wine/60">
              Sua presença foi confirmada com sucesso. Estamos ansiosos para celebrar com você!
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-wine/5 shadow-sm space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label className="block font-body text-sm text-wine/70 mb-2">
                Seu Nome Completo *
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="bg-white/80 border-wine/10 text-wine placeholder:text-wine/30 font-body focus:border-wine/30 focus:ring-wine/10"
                required
              />
            </div>
            <div>
              <label className="block font-body text-sm text-wine/70 mb-2">
                Número de Acompanhantes
              </label>
              <Input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                min="0"
                max="5"
                className="bg-white/80 border-wine/10 text-wine font-body focus:border-wine/30 focus:ring-wine/10"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-wine/70 mb-2">
                Deixe um Recado (opcional)
              </label>
              <Textarea
                value={recado}
                onChange={(e) => setRecado(e.target.value)}
                placeholder="Escreva uma mensagem para os noivos..."
                rows={3}
                className="bg-white/80 border-wine/10 text-wine placeholder:text-wine/30 font-body resize-none focus:border-wine/30 focus:ring-wine/10"
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !name.trim()}
              className="w-full bg-wine hover:bg-wine-light text-blush font-body text-base tracking-wider py-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Heart className="w-4 h-4 mr-2 fill-blush/50" />
                  Confirmar Presença
                </>
              )}
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
