import React from 'react';
import { motion } from 'framer-motion';

/**
 * Player de vidro discreto com a música "I Wanna Be Yours".
 */
const MusicPlayer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-md"
    >
      <div className="rounded-[1.75rem] border border-white/60 bg-white/40 p-3 shadow-[0_12px_40px_-16px_rgba(201,154,148,0.4)] backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2 px-2 pt-1">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-gold" />
          </span>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-rose-deep">
            Nossa música
          </p>
          <span className="ml-auto font-serif text-sm italic text-ink/70">
            I Wanna Be Yours
          </span>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/nyuo9-OjNNg"
            title="I Wanna Be Yours"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
