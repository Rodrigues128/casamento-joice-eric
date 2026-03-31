import { Heart } from 'lucide-react';
import Divider from './Divider';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-wine text-blush/80">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-blush/40 mb-4">
          Obrigado
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-blush mb-6">
          Joicilene & Eric
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-blush/20" />
          <Heart className="w-3 h-3 text-blush/30 fill-blush/10" />
          <div className="h-px w-16 bg-blush/20" />
        </div>
        <p className="font-accent italic text-base md:text-lg text-blush/50 leading-relaxed max-w-md mx-auto">
          "O amor verdadeiro nunca se desgasta. Quanto mais você dá, mais você tem."
        </p>
        <p className="mt-8 font-body text-xs tracking-widest uppercase text-blush/30">
          19 de Setembro de 2026
        </p>
      </div>
    </footer>
  );
}