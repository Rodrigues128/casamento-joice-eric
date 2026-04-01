import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Check, Loader2, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

import { weddingApi } from '@/api/weddingApi';
import { WEDDING_CONFIG } from '@/lib/wedding-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

/**
 * Seção de Confirmação de Presença (RSVP)
 */
export default function RSVPSection() {
  // --- Estados do Formulário ---
  const [formData, setFormData] = useState({
    name: '',
    isAlone: true,
    guests: '1',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const { ref, isVisible } = useScrollAnimation();

  // --- Helpers e Lógicas ---

  /**
   * Dispara o efeito visual de celebração
   */
  const fireCelebration = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ['#D1AAA2', '#8B4354', '#E8D7D0'];

    (function frame() {
      confetti({ 
        particleCount: 2, 
        angle: 60, 
        spread: 55, 
        origin: { x: 0 }, 
        colors 
      });
      confetti({ 
        particleCount: 2, 
        angle: 120, 
        spread: 55, 
        origin: { x: 1 }, 
        colors 
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  /**
   * Reseta o formulário para uma nova entrada
   */
  const resetForm = () => {
    setFormData({ name: '', isAlone: true, guests: '1', message: '' });
    setSubmitted(false);
  };

  // Volta ao formulário automaticamente após 15s
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(resetForm, 15000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  /**
   * Processamento do Envio
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || loading) return;
    
    setLoading(true);
    try {
      const totalGuests = formData.isAlone ? 1 : (parseInt(formData.guests) || 0) + 1;

      await weddingApi.rsvp.submit({
        nome: formData.name.trim(),
        presenca: 'Confirmado',
        acompanhantes: totalGuests,
        recado: formData.message.trim() || 'Sem mensagem'
      });

      setSubmitted(true);
      fireCelebration();
    } catch (err) {
      console.error('Falha ao processar RSVP:', err);
    } finally {
      setLoading(false);
    }
  };

  // --- Componentes Internos para Limpeza Visual ---
  
  const SuccessState = () => (
    <motion.div
      className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-wine/5 shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8 text-sage" />
      </div>
      <h3 className="font-display text-2xl text-wine mb-4 italic">Confirmado com sucesso!</h3>
      <p className="font-body text-wine/60 mb-8 text-lg">
        Sua presença é essencial para o nosso grande dia.<br/> Mal podemos esperar para te ver!
      </p>
      
      <Button onClick={resetForm} variant="outline" className="border-wine/20 text-wine hover:bg-wine/5 font-body gap-2">
        <RefreshCw className="w-4 h-4" /> Confirmar para outra pessoa
      </Button>
    </motion.div>
  );

  return (
    <section id="presenca" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-xl mx-auto px-6">
        <header className="text-center mb-12">
          <motion.span className="font-body text-xs tracking-[0.4em] uppercase text-sage block mb-4"
            initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
            Confirmação
          </motion.span>
          <motion.h2 className="font-display text-4xl md:text-5xl text-wine"
            initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
            Presença
          </motion.h2>
          <div className="mt-6"><Divider /></div>
          <p className="mt-6 font-body text-lg text-wine/60 italic leading-relaxed">
            Sua presença é o nosso melhor presente.<br/> Por favor, confirme até 10 de Setembro.
          </p>
        </header>

        <AnimatePresence mode="wait">
          {submitted ? <SuccessState key="success" /> : (
            <motion.form key="form" onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-wine/5 shadow-lg space-y-6"
              initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} exit={{ opacity: 0, scale: 0.95 }}>
              
              {/* Nome */}
              <div className="space-y-2">
                <label className="font-body text-sm text-wine/70 uppercase tracking-widest px-1">Nome Completo</label>
                <Input value={formData.name} required placeholder="Como está no convite"
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-white/80 border-wine/10 h-12 focus:ring-wine/20" />
              </div>

              {/* Acompanhantes Toggle */}
              <div className="space-y-3">
                <label className="font-body text-sm text-wine/70 uppercase tracking-widest px-1">Você virá acompanhado?</label>
                <div className="flex gap-4">
                  {[ {val: true, label: 'Somente eu'}, {val: false, label: 'Vou levar alguém'} ].map(opt => (
                    <button key={opt.label} type="button" onClick={() => setFormData({...formData, isAlone: opt.val})}
                      className={`flex-1 py-3 px-4 rounded-xl border font-body text-sm transition-all h-12 ${
                        formData.isAlone === opt.val ? 'bg-wine text-white border-wine shadow-md' : 'bg-white/50 text-wine/60 border-wine/10 hover:bg-white/80'
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Acompanhantes */}
              {!formData.isAlone && (
                <motion.div className="space-y-2" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}>
                  <label className="font-body text-sm text-wine/70 uppercase tracking-widest px-1">Quantos convidados extras?</label>
                  <Input type="number" min="1" max="10" value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                    className="bg-white/80 border-wine/10 h-12 focus:ring-wine/20" />
                </motion.div>
              )}

              {/* Mensagem */}
              <div className="space-y-2">
                <label className="font-body text-sm text-wine/70 uppercase tracking-widest px-1">Mensagem para o casal</label>
                <Textarea rows={3} value={formData.message} placeholder="Deixe uma palavra de carinho..."
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="bg-white/80 border-wine/10 resize-none focus:ring-wine/20" />
              </div>

              <Button type="submit" disabled={loading || !formData.name.trim()}
                className="w-full bg-wine hover:bg-wine-light text-white font-body text-lg h-14 rounded-2xl shadow-xl hover:shadow-2xl transition-all gap-2">
                {loading ? <Loader2 className="animate-spin" /> : <><Heart className="w-5 h-5 fill-white/20" /> Confirmar Minha Presença</>}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
