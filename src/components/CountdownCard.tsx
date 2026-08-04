import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface CountdownCardProps {
  value: number;
  label: string;
  /** O card de segundos ganha uma pulsação sutil a cada tick. */
  pulse?: boolean;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ value, label, pulse = false }) => {
  const reduce = useReducedMotion();
  const display = String(value).padStart(2, '0');

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      whileHover={reduce ? undefined : { y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/60 bg-white/40 px-3 py-5 shadow-[0_8px_32px_-12px_rgba(201,154,148,0.35)] backdrop-blur-xl sm:px-4 sm:py-7"
    >
      {/* brilho superior discreto */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      {/* glow no hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gold/0 transition-colors duration-500 group-hover:bg-gold/[0.06]" />

      <div className="relative flex h-[1.15em] items-center justify-center overflow-hidden font-serif text-4xl font-semibold leading-none text-ink sm:text-5xl md:text-6xl">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={reduce ? false : { y: pulse ? '55%' : 0, opacity: pulse ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: pulse ? '-55%' : 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="tabular-nums"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="relative mt-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-rose-deep sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
};

export default CountdownCard;
