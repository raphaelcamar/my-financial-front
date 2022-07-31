import { MONTHS } from './data/months';

export const getMonthByIndex = (index: number) => MONTHS.find(month => month.index === index);
