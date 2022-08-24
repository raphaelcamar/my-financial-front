export const getRestPercentage = (total: number, received: number): number => {
  let value = 0;
  value = received * 100;
  return value / total;
};
