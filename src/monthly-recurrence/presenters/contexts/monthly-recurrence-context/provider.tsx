import React, { ReactElement, useMemo, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { MonthlyRecurrenceContext } from './context';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { GetMonthlyRecurrences, GetTags } from '@/monthly-recurrence/data/use-cases/monthly-recurrence';
import { fetchMonthlyRecurrences, fetchTags } from './actions';
import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';

export const MonthlyRecurrenceProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const monthlyClosingRepository = useMemo(() => new MonthlyRecurrenceRepositoryData(), []);

  const getMonthlyRecurrences = async (walletId: string, query?: { input?: string; tags?: Array<{ id: string }> }) => {
    const useCase = new GetMonthlyRecurrences(monthlyClosingRepository, { ...query }, walletId);

    const result = await useCase.execute();
    dispatch(fetchMonthlyRecurrences(result));
  };

  const getTags = async (page: number, walletId: string) => {
    const useCase = new GetTags(monthlyClosingRepository, page, walletId);
    const result = await useCase.execute();

    dispatch(fetchTags(result.tags));

    return result;
  };

  const createTag = async (tag: Tag, walletId: string) => {
    await monthlyClosingRepository.createTag(tag, walletId);
  };

  const createMonthlyRecurrence = async (monthlyRecurrence: MonthlyRecurrence.Create, walletId: string) => {
    const monthly = await monthlyClosingRepository.createMonthlyRecurrence(monthlyRecurrence, walletId);
    const monthlyRecurrenceCreated = new MonthlyRecurrence(monthly);

    dispatch(fetchMonthlyRecurrences([...state.monthlyRecurences, monthlyRecurrenceCreated]));
  };

  return (
    <MonthlyRecurrenceContext.Provider
      value={{
        monthlyRecurrences: state.monthlyRecurences,
        getMonthlyRecurrences,
        setLoading,
        getTags,
        createTag,
        createMonthlyRecurrence,
        loading,
        tags: state.tags,
      }}
    >
      {children}
    </MonthlyRecurrenceContext.Provider>
  );
};
