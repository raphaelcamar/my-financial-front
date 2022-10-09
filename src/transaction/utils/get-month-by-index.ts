import { MONTHS } from './data/months.data';

export const getMonthByIndex = (index: number) => MONTHS.find(month => month.index === index);
