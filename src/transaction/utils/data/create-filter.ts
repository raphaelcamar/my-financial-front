import { Transaction } from '@/transaction/domain';

export const createFilter = (filter: Transaction.Filter): string => {
  let query = '';
  if (!filter?.limit && !filter?.start) return '';

  const date = new Date(filter?.start);
  if (filter?.start) {
    query += `?month=${date.getMonth() + 1}`;
  }

  if (filter?.limit) {
    query += `&year=${date.getFullYear()}`;
  }

  return query;
};
