import { SelectType } from '@/core/domain';
import { MONTHS } from './months';

export const filterTableData = (currentMonth: number): SelectType<string>[] => {
  const traveledMonths = MONTHS.filter(month => month.index <= currentMonth);

  const adapteeMonths = traveledMonths?.map(month => ({
    value: String(month.index),
    text: String(month.month),
  }));

  return adapteeMonths;
};
