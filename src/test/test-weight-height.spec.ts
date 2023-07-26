import { getImc } from '../services/weight-height';

it('Deve calcular corretamente', () => {
  const imc = getImc;
  expect(imc(80, 1.8)).toBeCloseTo(24.69);
  expect(imc(80, 1.8)).not.toBeNull();
  expect(imc(80, 1.8)).not.toBeFalsy();
});
