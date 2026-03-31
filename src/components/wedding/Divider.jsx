import { Heart } from 'lucide-react';

export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="h-px w-16 bg-wine/30" />
      <Heart className="w-3 h-3 text-wine/40 fill-wine/20" />
      <div className="h-px w-16 bg-wine/30" />
    </div>
  );
}