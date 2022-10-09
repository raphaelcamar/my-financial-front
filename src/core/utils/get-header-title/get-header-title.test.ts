import { getHeaderTitle } from './get-header-title';

describe('GetHeaderTitle - Unit tests', () => {
  test('Should be able to receive /transacoes and return Transações', () => {
    const result = getHeaderTitle('/transacoes');

    expect(result).toBe('Transações');
  });

  test('Should be able to receive /perfil and return Meu perfil', () => {
    const result = getHeaderTitle('/perfil');

    expect(result).toBe('Meu perfil');
  });

  test('Should be able to receive /minha-carteira and return Minha carteira', () => {
    const result = getHeaderTitle('/minha-carteira');

    expect(result).toBe('Minha carteira');
  });

  test('Should be able to receive /informacoes-pessoais and return Informações pessoais', () => {
    const result = getHeaderTitle('/informacoes-pessoais');

    expect(result).toBe('Informações pessoais');
  });

  test('Should be able to receive /recorrencias-mensais and return Recorrências Mensais', () => {
    const result = getHeaderTitle('/recorrencias-mensais');

    expect(result).toBe('Recorrências Mensais');
  });

  test('Should be able to receive /tags and return Tags', () => {
    const result = getHeaderTitle('/tags');

    expect(result).toBe('Tags');
  });

  test('Should not be able to receive a valid value and return empty', () => {
    const result = getHeaderTitle('/some-link');

    expect(result).toBe('');
  });
});
