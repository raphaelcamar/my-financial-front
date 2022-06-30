import { MONTHS } from './months';

export const getMonthByIndex = (index: number) => MONTHS.find(month => month.index === index);
