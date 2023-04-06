import { ItemFilter } from '@/transaction/ui/components/atoms';

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
