import React, { ReactElement, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { SpentsAndRevenuesContext } from './context';
import { DeleteTransaction, GetIndicators, GetTransactions } from '@/transaction/data';
import { fetchDeleteTransaction, fetchFilterTransaction, fetchGetTransactions, fetchIndicators } from './actions';
import { delay } from '@/core/utils';
import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepositoryData } from '@/transaction/infra/http/spents-and-revenues-repository-data';

export const SpentsAndRevenuesProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactions = async (walletId: string, filter: Transaction.Filter): Promise<void> => {
    setLoading(true);
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new GetTransactions(spentsAndRevenuesRepository, walletId, filter);
    const transactions = await useCase.execute();

    await delay(2000);
    dispatch(fetchGetTransactions(transactions));
    dispatch(fetchFilterTransaction(filter));

    setLoading(false);
  };

  const deleteTransaction = async (transactionId: string, walletId: string): Promise<void> => {
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new DeleteTransaction(spentsAndRevenuesRepository, transactionId, walletId, state.transactions);
    const filteredTransactions = await useCase.execute();

    dispatch(fetchDeleteTransaction(filteredTransactions));
  };

  const getIndicators = async (walletId: string, filter: Transaction.Filter): Promise<void> => {
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new GetIndicators(walletId, filter, spentsAndRevenuesRepository);

    const result = await useCase.execute();

    dispatch(fetchIndicators(result));
  };

  return (
    <SpentsAndRevenuesContext.Provider
      value={{
        getTransactions,
        transactionLoader: loading,
        setTransactionLoader: setLoading,
        transactions: state.transactions,
        deleteTransaction,
        getIndicators,
        filter: state.filter,
        indicators: state.indicators,
      }}
    >
      {children}
    </SpentsAndRevenuesContext.Provider>
  );
};
