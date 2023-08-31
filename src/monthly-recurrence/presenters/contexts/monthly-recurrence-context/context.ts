import { createContext, useContext } from 'react';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

type PropsMonthlyRecurrences = {
  monthlyRecurrences: MonthlyRecurrence[];
  getMonthlyRecurrences: (walletId: string) => Promise<void>;
};

export const MonthlyRecurrenceContext = createContext<PropsMonthlyRecurrences>({} as PropsMonthlyRecurrences);

export const useMonthlyRecurrenceContext = (): PropsMonthlyRecurrences => useContext(MonthlyRecurrenceContext);
