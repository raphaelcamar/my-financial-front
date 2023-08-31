import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

export interface MonthlyRecurrenceRepository {
  getMonthlyRecurrences: (filter: string, walletId: string) => Promise<MonthlyRecurrence[]>;
}
