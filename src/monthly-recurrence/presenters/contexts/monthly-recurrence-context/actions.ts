import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';
import { ActionType, ReducerActions } from './types';

export function fetchMonthlyRecurrences(payload: MonthlyRecurrence[]): ReducerActions {
  return { type: ActionType.GET_MONTHLY_RECURRENCES, payload };
}

export function fetchTags(payload: Tag[]): ReducerActions {
  return { type: ActionType.GET_TAGS, payload };
}
