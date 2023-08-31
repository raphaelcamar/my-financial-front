import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

export type InitialState = {
  monthlyRecurences: MonthlyRecurrence[];
  filter: {
    input: string;
    tags: Array<{ id: string }>;
  };
};

export enum ActionType {
  GET_MONTHLY_RECURRENCES = 'GET_MONTHLY_RECURRENCES',
  UPDATE_FILTER = 'UPDATE_FILTER',
}

export type GetMonthlyRecurrences = {
  type: ActionType.GET_MONTHLY_RECURRENCES;
  payload: MonthlyRecurrence[];
};

export type UpdateFilter = {
  type: ActionType.UPDATE_FILTER;
  payload: {
    tags: Array<{ id: string }>;
    input: string;
  };
};

export type ReducerActions = GetMonthlyRecurrences | UpdateFilter;
