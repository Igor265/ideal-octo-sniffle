import React, {useEffect, useState} from 'react';
import {formatTempoDecorrido} from "./utils/stopwatch.ts";

const App: React.FC = () => {
  const [tempoDecorrido, setTempoDecorrido] = useState<string>('');

  useEffect(() => {
    const calcularTempoDecorrido = () => {
      const dataInicial = new Date('2024-07-04');
      const agora = new Date().getTime();
      const dataInicialTimestamp = dataInicial.getTime();
      const diferencaMs = agora - dataInicialTimestamp;
      setTempoDecorrido(formatTempoDecorrido(diferencaMs));
    };

    calcularTempoDecorrido();

    const intervalo = setInterval(calcularTempoDecorrido, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // const [isSwapped, setIsSwapped] = useState(false);
  //
  // const handleNoClick = () => {
  //   setIsSwapped(!isSwapped);
  // };
  //
  // const handleYesClick = () => {
  //   const audio = new Audio('/ideal-octo-sniffle/assets/i-wanna-be-yours.mp3');
  //   audio.volume = 0.05;
  //   audio.play()
  //   window.open('https://wa.me/31985232524?text=Oi%20gatinho%20vamos%20nos%20encontrar%20domingo!', '_blank');
  // };

  return (
    <div className="bg-[#FFC0CB] min-h-screen flex flex-col gap-6 justify-center items-center antialiased px-4">
      <div className="max-w-4xl w-full">
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Há {tempoDecorrido} que você entrou na minha vida,
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          e desde então cada momento tem sido uma nova descoberta,
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          um novo sorriso, um novo motivo para ser feliz.
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          O tempo que passamos juntos é uma prova de que os dias podem ser contados.
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Cada dia ao seu lado é um presente que ilumina minha vida,
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          transformado em uma história de amor que cresce a cada dia.
        </p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Que venham muitos mais dias, sempre juntos.
        </p>
      </div>

      <iframe
        className="w-full max-w-3xl"
        height="380"
        src="https://www.youtube.com/embed/nyuo9-OjNNg"
        title="I Wanna Be Yours"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>








    // <div className="bg-[#FFC0CB] min-h-screen flex justify-center items-center p-4 sm:p-10">
    //   <div
    //     className="w-full max-w-lg flex flex-col justify-center items-center bg-[url('/ideal-octo-sniffle/assets/fundo.svg')] bg-cover bg-center bg-no-repeat rounded-2xl p-6 sm:p-10">
    //     <h2
    //       className="font-epilogue font-bold text-[#EED5D2] text-3xl sm:text-5xl leading-tight tracking-[-0.033em] text-center">
    //       Aceita sair comigo?
    //     </h2>
    //     <p className="font-epilogue text-[#EED5D2] text-base sm:text-lg font-medium leading-normal text-center mt-4">
    //       Oi Hivia, tenho pensado bastante em nossos momentos juntos... e gostaria muito de repetir a dose. Vamos nos encontrar de
    //       novo?
    //     </p>
    //     <div className={`flex gap-2 mt-6 ${isSwapped ? 'flex-row-reverse' : ''}`}>
    //       <button
    //         onClick={handleYesClick}
    //         className="flex min-w-[84px] max-w-[200px] sm:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden bg-[#ed5e82] rounded-full h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d94b6b] hover:text-[#f4f0f1]">
    //         <span className="truncate font-epilogue">Sim</span>
    //       </button>
    //       <button
    //         onClick={handleNoClick}
    //         className="flex min-w-[84px] max-w-[200px] sm:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden bg-[#f4f0f1] rounded-full h-10 px-4 text-[#181113] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e0dcdc] hover:text-[#181113]">
    //         <span className="truncate font-epilogue">Não</span>
    //       </button>
    //     </div>
    //     <p className="text-sm font-normal leading-normal pt-4 text-center">❤️</p>
    //   </div>
    // </div>
  );
};

export default App;
