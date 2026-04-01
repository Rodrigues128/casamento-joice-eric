import { motion } from 'framer-motion';

/**
 * Componente de Chuva de Pétalas (Evento Único)
 * Dispara uma chuva de pétalas que cai uma vez e encerra.
 */
export default function FloatingElements() {
  const petals = Array.from({ length: 25 }); // Aumentei para 25 para uma chuva mais bonita

  const petalPaths = [
    "M10,0 C15,0 20,5 20,12 C20,18 15,20 10,20 C5,20 0,18 0,12 C0,5 5,0 10,0",
    "M10,0 C18,2 20,10 18,15 C16,19 10,20 8,18 C4,15 2,8 10,0",
    "M10,0 C5,5 2,12 5,16 C8,20 15,20 18,16 C20,12 15,5 10,0"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[200]">
      {petals.map((_, i) => {
        const size = Math.random() * 15 + 15;
        const duration = 8 + Math.random() * 6;
        const delay = Math.random() * 5;
        // Posição horizontal aleatória entre 0% e 100% da tela
        const startX = Math.random() * 100;
        const path = petalPaths[i % petalPaths.length];
        
        const colors = ['#D1AAA2', '#8B4354', '#E8D7D0'];
        const color = colors[i % colors.length];

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -100, x: `${startX}vw`, rotate: 0, opacity: 0 }}
            animate={{ 
              y: '110vh',
              x: [
                `${startX}vw`, 
                `${startX + (Math.random() * 10 - 5)}vw`, 
                `${startX + (Math.random() * 20 - 10)}vw`
              ],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: duration, 
              delay: delay,
              ease: "linear"
            }}
          >
            <svg 
              width={size} 
              height={size} 
              viewBox="0 0 20 20" 
              fill={color}
            >
              <path d={path} opacity="0.7" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
