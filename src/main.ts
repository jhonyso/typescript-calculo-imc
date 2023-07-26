//Capiturar evento de submit do formulario
import { getImc } from './ts/weight-height';
import { getNivelImc } from './ts/levelImc';
import { setResultado } from './ts/result';

const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const target = event.target as HTMLInputElement;
  const inputPeso = target.querySelector('#peso') as HTMLInputElement;
  const inputAltura = target.querySelector('#altura') as HTMLInputElement;

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC É ${imc.toFixed(2)} (${nivelImc}).`;

  setResultado(msg, true);
});
