import { parse } from 'date-fns';

export const parseDate = (dateString: string, dateFormat: string): Date => parse(dateString, dateFormat, new Date());
