import { ItemFilter } from '@/transaction/ui/components/atoms';
import { getMonthByIndex } from '@/transaction/utils';

export const getListOfMonths = (): ItemFilter[] => {
  const MONTH_LENGTH = 12;
  const arr = Array.from({ length: MONTH_LENGTH });

  return arr.map<ItemFilter>((_, index) => ({ id: index.toString(), label: getMonthByIndex(index).month }));
};
