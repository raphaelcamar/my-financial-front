import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { date, currency, formatCurrencyDefault, formatDateDefault } from './input-masks';

type MaskType = (e: React.ChangeEvent<HTMLInputElement>) => React.ChangeEvent<HTMLInputElement>;

const makeSut = (mask: MaskType) => {
  const renderProps = render(<input aria-label="input" onChange={e => mask(e)} />);
  const input = renderProps.getByLabelText('input') as HTMLInputElement;

  return {
    renderProps,
    input,
  };
};

const MOCK_DATE = {
  string: '23052021',
  formatted: '23/05/2021',
};

const MOCK_CURRENCY_HUNDREDS = {
  string: '23000',
  formatted: '230,00',
};

const MOCK_CURRENCY_THOUSANDS = {
  string: '230000',
  formatted: '2.300,00',
};

const MOCK_CURRENCY_MILLIONS = {
  string: '230000000',
  formatted: '2.300.000,00',
};

describe('InputMasks - Unit test', () => {
  test('Should be able to format the date correctly', async () => {
    const { input } = makeSut(date);
    fireEvent.change(input, { target: { value: MOCK_DATE.string } });

    expect(input.value).toBe(MOCK_DATE.formatted);
  });

  test('Should be able to format the currency correctly', async () => {
    const { input } = makeSut(currency);

    fireEvent.change(input, { target: { value: MOCK_CURRENCY_HUNDREDS.string } });
    expect(input.value).toBe(MOCK_CURRENCY_HUNDREDS.formatted);

    fireEvent.change(input, { target: { value: MOCK_CURRENCY_THOUSANDS.string } });
    expect(input.value).toBe(MOCK_CURRENCY_THOUSANDS.formatted);

    fireEvent.change(input, { target: { value: MOCK_CURRENCY_MILLIONS.string } });
    expect(input.value).toBe(MOCK_CURRENCY_MILLIONS.formatted);
  });

  test('Should be able to return the date without changes', async () => {
    const VALUE = '14031999';

    expect(formatDateDefault(VALUE)).toBe(VALUE);
  });

  test('Should be able to receive a string return the currency value', async () => {
    expect(formatCurrencyDefault(MOCK_CURRENCY_HUNDREDS.string)).toBe(MOCK_CURRENCY_HUNDREDS.formatted);
    expect(formatCurrencyDefault(MOCK_CURRENCY_THOUSANDS.string)).toBe(MOCK_CURRENCY_THOUSANDS.formatted);
    expect(formatCurrencyDefault(MOCK_CURRENCY_MILLIONS.string)).toBe(MOCK_CURRENCY_MILLIONS.formatted);
  });
});
