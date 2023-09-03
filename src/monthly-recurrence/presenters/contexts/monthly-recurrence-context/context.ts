import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';
import { Pagination } from '@/core/domain';

type PropsMonthlyRecurrences = {
  monthlyRecurrences: MonthlyRecurrence[];
  getMonthlyRecurrences: (walletId: string, filter?: { input?: string; tags?: Array<{ id: string }> }) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tags: Tag[];
  getTags: (page: number, walletId: string) => Promise<Pagination<Tag[], 'tags'>>;
};

export const MonthlyRecurrenceContext = createContext<PropsMonthlyRecurrences>({} as PropsMonthlyRecurrences);

export const useMonthlyRecurrenceContext = (): PropsMonthlyRecurrences => useContext(MonthlyRecurrenceContext);
