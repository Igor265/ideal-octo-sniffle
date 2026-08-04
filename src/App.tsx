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

      <main className="relative flex min-h-screen flex-col items-center justify-center gap-16 px-5 py-20 sm:gap-20 sm:px-8 sm:py-24">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: easeOut }}
          className="max-w-2xl text-center"
        >
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-rose-deep">
            desde 04 . 07 . 2024
          </p>
          <h1 className="font-serif text-3xl font-medium leading-[1.25] text-ink sm:text-4xl md:text-5xl">
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
          className="grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="max-w-xl space-y-1 text-center"
        >
          {FECHO.map((linha, i) => (
            <p
              key={i}
              className="font-serif text-lg italic leading-relaxed text-ink/80 sm:text-xl"
            >
              {linha}
            </p>
          ))}
        </motion.section>

        {/* Player de vidro */}
        <MusicPlayer />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs tracking-[0.3em] text-rose-deep/70"
        >
          ♡
        </motion.p>
      </main>
    </>
  );
};

export default App;
