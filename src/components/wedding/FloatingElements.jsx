import { motion } from 'framer-motion';

export default function FloatingElements() {
  const petals = Array.from({ length: 60 }); 

  const petalPaths = [
    "M10,0 C15,0 20,5 20,12 C20,18 15,20 10,20 C5,20 0,18 0,12 C0,5 5,0 10,0",
    "M10,0 C18,2 20,10 18,15 C16,19 10,20 8,18 C4,15 2,8 10,0",
    "M10,0 C5,5 2,12 5,16 C8,20 15,20 18,16 C20,12 15,5 10,0"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[200]">
      {petals.map((_, i) => {
        const size = Math.random() * 15 + 10; 
        const duration = 10 + Math.random() * 8; 
        const delay = Math.random() * 8; 
        const startX = Math.random() * 100;
        const path = petalPaths[i % petalPaths.length];
        
        const colors = ['#D1AAA2', '#8B4354', '#E8D7D0', '#F5E6E1']; 
        const color = colors[i % colors.length];

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -50, x: `${startX}vw`, rotate: 0, opacity: 0 }}
            animate={{ 
              y: '110vh',
              x: [
                `${startX}vw`, 
                `${startX + (Math.random() * 15 - 7.5)}vw`, 
                `${startX + (Math.random() * 25 - 12.5)}vw`
              ],
              rotate: [0, 180, 360, 540, 720], 
              opacity: [0, 0.8, 0.8, 0]
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
              <path d={path} opacity="0.8" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
