import React, { ReactElement, useReducer } from 'react';
import { initialState, reducer } from './reducers';
import { MonthlyRecurrenceContext } from './context';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { GetMonthlyRecurrences } from '@/monthly-recurrence/data/use-cases/monthly-recurrence';
import { fetchMonthlyRecurrences } from './actions';

export const MonthlyRecurrenceProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getMonthlyRecurrences = async (walletId: string) => {
    const monthlyClosingRepository = new MonthlyRecurrenceRepositoryData();
    const useCase = new GetMonthlyRecurrences(monthlyClosingRepository, state.filter, walletId);

    const result = await useCase.execute();
    dispatch(fetchMonthlyRecurrences(result));
  };

  return (
    <MonthlyRecurrenceContext.Provider
      value={{
        monthlyRecurrences: state.monthlyRecurences,
        getMonthlyRecurrences,
      }}
    >
      {children}
    </MonthlyRecurrenceContext.Provider>
  );
};
