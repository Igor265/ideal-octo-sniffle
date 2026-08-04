export interface TempoDecorrido {
  anos: number;
  meses: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

/**
 * Versão estruturada de {@link formatTempoDecorrido}: reaproveita exatamente o
 * mesmo cálculo, apenas expondo cada unidade como número para renderizar cards.
 */
export const getTempoDecorrido = (diferencaMs: number): TempoDecorrido => {
  const segundos = Math.floor(diferencaMs / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);
  const meses = Math.floor(dias / 30);

  return {
    anos,
    meses: meses % 12,
    dias: dias % 30,
    horas: horas % 24,
    minutos: minutos % 60,
    segundos: segundos % 60,
  };
};

export const formatTempoDecorrido = (diferencaMs: number): string => {
  const segundos = Math.floor(diferencaMs / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);
  const meses = Math.floor(dias / 30);

  const restanteSegundos = segundos % 60;
  const restanteMinutos = minutos % 60;
  const restanteHoras = horas % 24;
  const restanteDias = dias % 30;
  const restanteMeses = meses % 12;

  let tempo = '';

  if (anos > 0) {
    tempo += `${anos} ano${anos > 1 ? 's' : ''}, `;
  }
  if (restanteMeses > 0 || anos > 0) {
    tempo += `${restanteMeses} mês${restanteMeses > 1 ? 'es' : ''}, `;
  }
  if (restanteDias > 0 || meses > 0) {
    tempo += `${restanteDias} dia${restanteDias > 1 ? 's' : ''}, `;
  }
  if (restanteHoras > 0 || dias > 0) {
    tempo += `${restanteHoras} hora${restanteHoras > 1 ? 's' : ''}, `;
  }
  if (restanteMinutos > 0 || horas > 0) {
    tempo += `${restanteMinutos} minuto${restanteMinutos > 1 ? 's' : ''}, `;
  }
  tempo += `${restanteSegundos} segundo${restanteSegundos > 1 ? 's' : ''}`;

  return tempo;
};