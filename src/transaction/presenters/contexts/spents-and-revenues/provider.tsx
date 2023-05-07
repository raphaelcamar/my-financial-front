import React, { ReactElement, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { SpentsAndRevenuesContext } from './context';
import { CreateTransaction, DeleteTransaction, GetIndicators, GetTransactions } from '@/transaction/data';
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

    setLoading(false);
  };

  const setFilter = (filter: Transaction.Filter): void => {
    dispatch(fetchFilterTransaction(filter));
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

  const createTransaction = async (transactionData: Transaction.Data): Promise<void> => {
    const transactionRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new CreateTransaction(transactionRepository, transactionData);
    await useCase.execute();

    const getTransactionsUseCase = new GetTransactions(transactionRepository, transactionData.walletId, state.filter);
    const transactions = await getTransactionsUseCase.execute();

    dispatch(fetchGetTransactions(transactions));
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
        createTransaction,
        setFilter,
        filter: state.filter,
        indicators: state.indicators,
      }}
    >
      {children}
    </SpentsAndRevenuesContext.Provider>
  );
};
