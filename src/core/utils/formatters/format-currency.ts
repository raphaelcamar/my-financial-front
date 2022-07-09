export const formatCurrency = (value: number) => {
  const currencyBRL = value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return currencyBRL;
};
