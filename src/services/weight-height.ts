/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function getImc(peso: number, altura: number) {
  return peso / altura ** 2;
}
