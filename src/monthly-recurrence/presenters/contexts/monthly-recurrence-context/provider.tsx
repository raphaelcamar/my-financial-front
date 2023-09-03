import React, { ReactElement, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { MonthlyRecurrenceContext } from './context';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { GetMonthlyRecurrences, GetTags } from '@/monthly-recurrence/data/use-cases/monthly-recurrence';
import { fetchMonthlyRecurrences, fetchTags } from './actions';

export const MonthlyRecurrenceProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const getMonthlyRecurrences = async (walletId: string, query?: { input?: string; tags?: Array<{ id: string }> }) => {
    const monthlyClosingRepository = new MonthlyRecurrenceRepositoryData();

    const useCase = new GetMonthlyRecurrences(monthlyClosingRepository, { ...query }, walletId);

    const result = await useCase.execute();
    dispatch(fetchMonthlyRecurrences(result));
  };

  const getTags = async (page: number, walletId: string) => {
    const monthlyClosingRepository = new MonthlyRecurrenceRepositoryData();

    const useCase = new GetTags(monthlyClosingRepository, page, walletId);
    const result = await useCase.execute();

    dispatch(fetchTags(result.tags));

    return result;
  };

  return (
    <MonthlyRecurrenceContext.Provider
      value={{
        monthlyRecurrences: state.monthlyRecurences,
        getMonthlyRecurrences,
        setLoading,
        getTags,
        loading,
        tags: state.tags,
      }}
    >
      {children}
    </MonthlyRecurrenceContext.Provider>
  );
};
