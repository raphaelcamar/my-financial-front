import { isValid } from 'date-fns';

export const isValidDate = (date: any): boolean => isValid(date);
