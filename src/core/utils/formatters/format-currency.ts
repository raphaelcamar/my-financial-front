export const formatCurrency = (value: number) => {
  const formattedValue = value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const currencyBRL = formattedValue?.replace('-', '');

  return currencyBRL;
};
