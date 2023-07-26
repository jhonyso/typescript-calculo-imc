/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { criarP } from './create-element';

export function setResultado(msg: string, isValid: boolean) {
  const resultado = document.querySelector('#resultado') as HTMLDivElement;
  resultado.innerHTML = '';

  const p = criarP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }
  p.innerHTML = msg;
  resultado?.appendChild(p);
}
