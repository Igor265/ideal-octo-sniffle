import React, { useMemo } from 'react';

interface ParticlesProps {
  count?: number;
}

interface Particle {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  gold: boolean;
}

/**
 * Camada de partículas/bokeh discretas. As posições são geradas uma única vez
 * (useMemo) para não recalcular a cada re-render do contador.
 */
const Particles: React.FC<ParticlesProps> = ({ count = 24 }) => {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 5,
        gold: Math.random() > 0.55,
      })),
    [count],
  );

  return (
    <div className="absolute inset-0">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-shimmer"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.gold
              ? 'radial-gradient(circle, rgba(201,169,106,0.9) 0%, rgba(201,169,106,0) 70%)'
              : 'radial-gradient(circle, rgba(232,196,192,0.9) 0%, rgba(232,196,192,0) 70%)',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
