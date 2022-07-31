export const formatMillisecondsToMinutes = (milliseconds: number): string => {
  const minutes = Math.floor(milliseconds / 60000); // get 1 minute

  const seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
