import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';
import Divider from './Divider';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', alt: 'Momento romântico do casal' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop', alt: 'Dança ao pôr do sol' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop', alt: 'Mãos entrelaçadas' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', alt: 'Abraço sob as flores' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galeria" className="py-20 md:py-32 bg-white/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-3">
            Nossos Momentos
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-wine">
            Galeria de Fotos
          </h2>
          <div className="mt-4">
            <Divider />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wine/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 font-accent text-lg text-wine/50 italic"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          Capturando cada instante de amor...
        </motion.p>
      </div>
    </section>
  );
}
