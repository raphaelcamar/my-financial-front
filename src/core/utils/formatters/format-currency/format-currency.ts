export const formatCurrency = (value: number, withoutNegative?: boolean) => {
  const formattedValue = value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return withoutNegative ? formattedValue : formattedValue?.replace('-', '');
};
