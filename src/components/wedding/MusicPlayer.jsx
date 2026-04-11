import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import musicFile from '@/assets/photograph.mp3';

export default function MusicPlayer({ autoPlay = false }) {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(() => {
    const a = new Audio(musicFile);
    a.loop = true;
    a.volume = 0.3;
    return a;
  });

  useEffect(() => {
    if (autoPlay) {
      audio.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
      });
    }
  }, [autoPlay, audio]);

  const toggle = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-wine/80 hover:bg-wine text-blush flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={playing ? 'Pausar música' : 'Tocar música'}
    >
      {playing ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </motion.button>
  );
}