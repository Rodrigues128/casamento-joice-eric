import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MessageCircle, Quote } from 'lucide-react';
import { weddingApi } from '@/api/weddingApi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await weddingApi.entities.GuestMessage.list();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSending(true);
    try {
      const newMsg = await weddingApi.entities.GuestMessage.create({
        author_name: name.trim(),
        message: text.trim(),
      });
      setMessages([newMsg, ...messages]);
      setName('');
      setText('');
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="recados" className="py-20 md:py-32 bg-blush-dark/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Mural de Recados
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Deixe seu Recado
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-wine/5 shadow-sm space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="bg-white/80 border-wine/10 text-wine placeholder:text-wine/30 font-body focus:border-wine/30 focus:ring-wine/10"
            required
          />
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escreva uma mensagem para os noivos..."
            rows={4}
            className="bg-white/80 border-wine/10 text-wine placeholder:text-wine/30 font-body resize-none focus:border-wine/30 focus:ring-wine/10"
            required
          />
          <Button
            type="submit"
            disabled={sending || !name.trim() || !text.trim()}
            className="bg-wine hover:bg-wine-light text-blush font-body tracking-wider rounded-xl transition-all duration-300"
          >
            {sending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Send className="w-4 h-4 mr-2" />
            )}
            Enviar Recado
          </Button>
        </motion.form>

        {/* Messages list */}
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-wine/40" />
          </div>
        ) : messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-wine/5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <Quote className="w-4 h-4 text-wine/20 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-base text-wine/70 leading-relaxed italic">
                      "{msg.message}"
                    </p>
                    <p className="mt-3 font-display text-sm text-wine/50">
                      — {msg.author_name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <MessageCircle className="w-8 h-8 text-wine/20 mx-auto mb-3" />
            <p className="font-body text-wine/40">
              Seja o primeiro a deixar um recado para os noivos!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
