import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTempoDecorrido, TempoDecorrido } from './utils/stopwatch.ts';
import Background from './components/Background';
import CountdownCard from './components/CountdownCard';
import MusicPlayer from './components/MusicPlayer';

const DATA_INICIAL = new Date('2024-07-04');

const UNIDADES: { key: keyof TempoDecorrido; label: string }[] = [
  { key: 'anos', label: 'Anos' },
  { key: 'meses', label: 'Meses' },
  { key: 'dias', label: 'Dias' },
  { key: 'horas', label: 'Horas' },
  { key: 'minutos', label: 'Minutos' },
  { key: 'segundos', label: 'Segundos' },
];

const FECHO = [
  'Cada dia ao seu lado é um presente que ilumina minha vida,',
  'transformado em uma história de amor que cresce a cada instante.',
  'Que venham muitos mais dias. Sempre juntos.',
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const App: React.FC = () => {
  const [tempo, setTempo] = useState<TempoDecorrido>(() =>
    getTempoDecorrido(Date.now() - DATA_INICIAL.getTime()),
  );

  useEffect(() => {
    const calcular = () =>
      setTempo(getTempoDecorrido(Date.now() - DATA_INICIAL.getTime()));

    calcular();
    const intervalo = setInterval(calcular, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Background />

      <main className="relative flex h-[100svh] flex-col items-center justify-center gap-[clamp(0.85rem,3vh,2rem)] overflow-hidden px-5 py-[clamp(0.9rem,3vh,2rem)] sm:px-8">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: easeOut }}
          className="max-w-2xl text-center"
        >
          <p className="mb-[clamp(0.4rem,1.4vh,1.25rem)] text-[0.65rem] font-medium uppercase tracking-[0.4em] text-rose-deep sm:text-[0.7rem]">
            desde 04 . 07 . 2024
          </p>
          <h1 className="font-serif font-medium leading-[1.2] text-ink text-[clamp(1.3rem,1.4vh+2.1vw,2.6rem)]">
            Desde o dia em que você entrou na minha vida,
            <br className="hidden sm:block" />{' '}
            <span className="italic text-rose-deep">cada segundo</span> faz tudo
            valer a pena.
          </h1>
        </motion.header>

        {/* Contador — protagonista */}
        <motion.section
          aria-label="Tempo que passamos juntos"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
          }}
          className="grid w-full max-w-4xl grid-cols-3 gap-2.5 sm:gap-3.5 lg:grid-cols-6"
        >
          {UNIDADES.map(({ key, label }) => (
            <CountdownCard
              key={key}
              value={tempo[key]}
              label={label}
              pulse={key === 'segundos'}
            />
          ))}
        </motion.section>

        {/* Fecho romântico */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
          className="max-w-xl text-center"
        >
          {FECHO.map((linha, i) => (
            <p
              key={i}
              className="font-serif italic leading-snug text-ink/80 text-[clamp(0.8rem,1vh+0.55vw,1.15rem)]"
            >
              {linha}
            </p>
          ))}
        </motion.section>

        {/* Player de vidro */}
        <MusicPlayer />
      </main>
    </>
  );
};

export default App;
