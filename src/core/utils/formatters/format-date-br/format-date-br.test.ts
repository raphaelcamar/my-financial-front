import { formatDateBR } from './format-date-br';

describe('FormatDateBr - Unit test', () => {
  test('Should be able to format the Date to BR', () => {
    const date = new Date().toISOString();

    const result = formatDateBR(date);
    expect(result).toMatch(/([0-3][0-9]\/[0-1][0-9]\/\d{4})/);
  });

  test('Should not be able to format the Date to BR and return null', () => {
    const result = formatDateBR(null);
    expect(result).toBeFalsy();
  });
});
