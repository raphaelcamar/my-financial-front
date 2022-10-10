import { formatCurrency } from './format-currency';

describe('FormatCurrency - Unit Test', () => {
  test('Should be able to format the currency for PT_BR', () => {
    const VALUE = 100;

    const formattedValue = formatCurrency(VALUE);

    expect(formattedValue).toContain('R$');
    expect(formattedValue).toContain(',');
  });

  test('Should be able to format the currency for positive value in PT_BR ', () => {
    const VALUE = -100;

    const formattedValue = formatCurrency(VALUE, false);

    expect(formattedValue).toContain('R$');
    expect(formattedValue).toContain(',');
    expect(formattedValue).not.toContain('-');
  });

  test('Should be able to format the currency for negative value in PT_BR ', () => {
    const VALUE = -100;

    const formattedValue = formatCurrency(VALUE, true);

    expect(formattedValue).toContain('R$');
    expect(formattedValue).toContain(',');
    expect(formattedValue).toContain('-');
  });

  test('Should not be able to format the currencyand return falsy', () => {
    const VALUE = undefined;

    const formattedValue = formatCurrency(VALUE);

    expect(formattedValue).toBeFalsy();
  });
});
