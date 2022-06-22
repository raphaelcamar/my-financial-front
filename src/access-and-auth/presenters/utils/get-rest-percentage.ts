export const getRestPercentage = (total: number, received: number): number => {
  let value = 0;
  value = ((total - received) / received) * 100;
  value = (value / received) * 100;
  return value * 100;
};
