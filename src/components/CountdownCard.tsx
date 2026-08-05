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
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-2 py-[clamp(0.55rem,1.8vh,1.5rem)] shadow-[0_8px_32px_-12px_rgba(201,154,148,0.35)] backdrop-blur-xl sm:rounded-3xl sm:px-3"
    >
      {/* brilho superior discreto */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      {/* glow no hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gold/0 transition-colors duration-500 group-hover:bg-gold/[0.06]" />

      <div className="relative flex h-[1.15em] items-center justify-center overflow-hidden font-serif font-semibold leading-none text-ink text-[clamp(1.55rem,4.4vw+0.5rem,3.25rem)]">
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

      <span className="relative mt-1.5 text-[0.55rem] font-medium uppercase tracking-[0.18em] text-rose-deep sm:text-[0.7rem] sm:tracking-[0.22em]">
        {label}
      </span>
    </motion.div>
  );
};

export default CountdownCard;
