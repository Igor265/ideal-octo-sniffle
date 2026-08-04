import React from 'react';
import Particles from './Particles';

/**
 * Fundo em camadas — gradiente base, blobs abstratos com blur, glow dourado
 * central, partículas/bokeh e grão sutil. Puramente decorativo.
 */
const Background: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Gradiente base creme → off-white → lilás */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#FDFBF9_0%,#FBF7F2_45%,#F3EEF6_100%)]" />

      {/* Blobs abstratos */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-rose-soft/60 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-lilac/60 blur-3xl animate-float" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-champagne/50 blur-3xl animate-breathe" />

      {/* Glow dourado central, atrás do contador */}
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,106,0.18)_0%,transparent_68%)] animate-breathe" />

      {/* Partículas / bokeh / estrelinhas */}
      <Particles count={26} />

      {/* Grão sutil */}
      <div className="grain absolute inset-0 opacity-[0.035] mix-blend-multiply" />
    </div>
  );
};

export default Background;
