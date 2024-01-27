import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';
import { Pagination } from '@/core/domain';

type PropsMonthlyRecurrences = {
  getMonthlyRecurrences: (walletId: string, filter?: { input?: string; tags?: Array<{ id: string }> }) => Promise<void>;
  getTags: (page: number, walletId: string) => Promise<Pagination<Tag[], 'tags'>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  createTag: (tag: Tag, walletId: string) => Promise<void>;
  monthlyRecurrences: MonthlyRecurrence[];
  loading: boolean;
  tags: Tag[];
};

export const MonthlyRecurrenceContext = createContext<PropsMonthlyRecurrences>({} as PropsMonthlyRecurrences);

export const useMonthlyRecurrenceContext = (): PropsMonthlyRecurrences => useContext(MonthlyRecurrenceContext);
