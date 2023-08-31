import { MonthlyRecurrence } from '@/monthly-recurrence/domain';
import { ActionType, ReducerActions } from './types';

export function fetchMonthlyRecurrences(payload: MonthlyRecurrence[]): ReducerActions {
  return { type: ActionType.GET_MONTHLY_RECURRENCES, payload };
}
