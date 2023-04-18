import { ItemFilter } from '@/transaction/ui/components/atoms';

import { getMonthByIndex } from '@/transaction/utils';

export const getListOfYears = (): ItemFilter[] => {
  const currentYear = new Date().getFullYear();
  const lastTenYears = currentYear - 10;
  const nextTenYears = currentYear + 10;

  const DATA: ItemFilter[] = [];
  let year = lastTenYears;

  while (year <= nextTenYears) {
    DATA.push({ id: year.toString(), label: year.toString() });
    year++;
  }

  return DATA;
};

export const getListOfMonths = (): ItemFilter[] => {
  const MONTH_LENGTH = 12;
  const arr = Array.from({ length: MONTH_LENGTH });

  return arr.map<ItemFilter>((_, index) => ({ id: index.toString(), label: getMonthByIndex(index).month }));
};
