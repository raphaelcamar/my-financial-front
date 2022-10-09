import { ParamError } from '@/core/domain/errors';

export const getRestPercentage = (total: number, received: number): number => {
  if (!total) throw new ParamError('Missing paramter: Total');
  if (!received) throw new ParamError('Missing paramter: received');

  let value = 0;
  value = received * 100;
  return value / total;
};
