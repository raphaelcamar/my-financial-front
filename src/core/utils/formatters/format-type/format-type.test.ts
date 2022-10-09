import { TypeTransaction } from '@/transaction/domain';
import { formatType } from './format-type';

describe('FormatType -Unit tests', () => {
  test('Should be able to receive type as ENTRANCE and return Entrada', () => {
    const result = formatType('ENTRANCE');

    expect(result).toBe('Entrada');
  });

  test('Should be able to receive type as RECURRENT and return Recorrente', () => {
    const result = formatType('RECURRENT');

    expect(result).toBe('Recorrente');
  });

  test('Should be able to receive type as SPENT and return Saída', () => {
    const result = formatType('SPENT');

    expect(result).toBe('Saída');
  });

  test('Should not be able to find a type and return -', () => {
    const result = formatType('test' as TypeTransaction);

    expect(result).toBe('-');
  });
});
