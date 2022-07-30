import { differenceInYears } from 'date-fns';

export const differenceInYearsDate = (startDate: Date, endDate: Date): number => differenceInYears(startDate, endDate);
