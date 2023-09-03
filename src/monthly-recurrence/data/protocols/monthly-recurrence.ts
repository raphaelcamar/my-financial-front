import { Pagination } from '@/core/domain';
import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';

export interface MonthlyRecurrenceRepository {
  getMonthlyRecurrences: (filter: string, walletId: string) => Promise<MonthlyRecurrence[]>;
  getTags: (page: number, walletId: string) => Promise<Pagination<Tag[], 'tags'>>;
}
