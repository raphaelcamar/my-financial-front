import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';

export type InitialState = {
  monthlyRecurences: MonthlyRecurrence[];
  tags: Tag[];
};

export enum ActionType {
  GET_MONTHLY_RECURRENCES = 'GET_MONTHLY_RECURRENCES',
  GET_TAGS = 'GET_TAGS',
}

export type GetMonthlyRecurrences = {
  type: ActionType.GET_MONTHLY_RECURRENCES;
  payload: MonthlyRecurrence[];
};

export type GetTags = {
  type: ActionType.GET_TAGS;
  payload: Tag[];
};

export type ReducerActions = GetMonthlyRecurrences | GetTags;
