import { startOfMonth } from 'date-fns';

export const monthStartDate = (date: Date): Date => startOfMonth(date);
