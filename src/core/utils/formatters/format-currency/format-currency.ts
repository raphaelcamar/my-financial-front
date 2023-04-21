export const formatCurrency = (value: number, withNegative?: boolean) => {
  const formattedValue = value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return withNegative ? formattedValue : formattedValue?.replace('-', '');
};
