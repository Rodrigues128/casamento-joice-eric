import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blush-dark/30 px-6">
      <div className="max-w-md w-full text-center bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-wine/5 shadow-sm">
        <h1 className="font-display text-6xl text-wine mb-4">404</h1>
        <h2 className="font-display text-2xl text-wine mb-6">Página não encontrada</h2>
        <p className="font-body text-wine/60 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button className="bg-wine hover:bg-wine-light text-blush font-body tracking-wider rounded-xl px-8">
            Voltar para o Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
