import { format } from 'date-fns';

export const formatDate = (date: Date | string, dateFormat = 'dd/MM/yyyy'): string => {
  if (date instanceof Date) {
    return format(date, dateFormat);
  }

  return format(new Date(date), dateFormat);
};
