import { getNivelImc } from '../ts/levelImc';

describe('Nivel imc', () => {
  afterEach(() => jest.clearAllMocks());

  it('Deve retornar a mensagem "Abaixo do peso"', () => {
    const msg = getNivelImc;
    expect(msg(18.4)).toBe('Abaixo do peso');
    expect(msg(18)).toEqual('Abaixo do peso');
  });

  it('Deve retornar a mensagem "Peso normal"', () => {
    const msg = getNivelImc;
    expect(msg(24)).toBe('Peso normal');
    expect(msg(20)).toEqual('Peso normal');
  });

  it('Deve retornar a mensagem "Sobre-peso"', () => {
    const msg = getNivelImc;
    expect(msg(29.8)).toBe('Sobre-peso');
    expect(msg(24.9)).toEqual('Sobre-peso');
  });

  it('Deve retornar a mensagem "Obesidade grau 1"', () => {
    const msg = getNivelImc;
    expect(msg(34.8)).toBe('Obesidade grau 1');
    expect(msg(29.9)).toEqual('Obesidade grau 1');
  });

  it('Deve retornar a mensagem "Obesidade grau 2"', () => {
    const msg = getNivelImc;
    expect(msg(34.9)).toBe('Obesidade grau 2');
    expect(msg(39.8)).toEqual('Obesidade grau 2');
  });

  it('Deve retornar a mensagem "Obesidade grau 3"', () => {
    const msg = getNivelImc;
    expect(msg(39.9)).toBe('Obesidade grau 3');
    expect(msg(50.9)).toEqual('Obesidade grau 3');
  });

  it('O calculo nao deve ser a mensagem esperada', () => {
    const msg = getNivelImc;
    expect(msg(18.5)).not.toBe('Abaixo do peso');
    expect(msg(0)).not.toBeUndefined();
  });
});
