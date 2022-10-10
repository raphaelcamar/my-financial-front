import { getHeaderTitle } from './get-header-title';

describe('GetHeaderTitle - Unit tests', () => {
  test('Should be able to receive the path and return the title', () => {
    const transactions = getHeaderTitle('/transacoes');
    const profile = getHeaderTitle('/perfil');
    const wallet = getHeaderTitle('/minha-carteira');
    const personal = getHeaderTitle('/informacoes-pessoais');
    const recurrency = getHeaderTitle('/recorrencias-mensais');
    const tag = getHeaderTitle('/tags');

    expect(transactions).toBe('Transações');
    expect(profile).toBe('Meu perfil');
    expect(wallet).toBe('Minha carteira');
    expect(personal).toBe('Informações pessoais');
    expect(recurrency).toBe('Recorrências Mensais');
    expect(tag).toBe('Tags');
  });

  test('Should not be able to receive a valid value and return empty', () => {
    const result = getHeaderTitle('/some-link');

    expect(result).toEqual('');
  });
});
