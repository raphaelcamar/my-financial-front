import React, { ReactElement, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { SpentsAndRevenuesContext } from './context';
import { TransactionRepositoryData } from '@/transaction/infra';
import { DeleteTransaction, GetTransactions } from '@/transaction/data';
import { fetchDeleteTransaction, fetchFilterTransaction, fetchGetTransactions } from './actions';
import { delay } from '@/core/utils';
import { Transaction } from '@/transaction/domain';

export const SpentsAndRevenuesProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactions = async (walletId: string, filter: Transaction.Filter): Promise<void> => {
    setLoading(true);
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new GetTransactions(transactionRepository, walletId, filter);
    const transactions = await useCase.execute();

    await delay(2000);
    dispatch(fetchGetTransactions(transactions));
    dispatch(fetchFilterTransaction(filter));

    setLoading(false);
  };

  const deleteTransaction = async (transactionId: string, walletId: string): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new DeleteTransaction(transactionRepository, transactionId, walletId, state.transactions);
    const filteredTransactions = await useCase.execute();

    dispatch(fetchDeleteTransaction(filteredTransactions));
  };

  return (
    <SpentsAndRevenuesContext.Provider
      value={{
        getTransactions,
        transactionLoader: loading,
        setTransactionLoader: setLoading,
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </SpentsAndRevenuesContext.Provider>
  );
};
