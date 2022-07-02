import React, { useReducer, useState } from 'react';
import { Transaction } from '@/transaction/domain';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra';
import { CreateTransaction, GetTransactions, DeleteTransaction } from '@/transaction/data/use-cases';
import {
  fetchCreateTransaction,
  fetchDeleteTransaction,
  fetchFilterTransaction,
  fetchGetTransactions,
} from './actions';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [transactionLoader, setTransactionLoader] = useState<boolean>(false);

  const createTransaction = async (transactionData: Transaction.Data): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new CreateTransaction(transactionData, transactionRepository);

    await useCase.execute();

    const getTransactions = new GetTransactions(transactionRepository, state.filter);

    const result = await getTransactions.execute();

    dispatch(fetchCreateTransaction(result));
  };

  const getTransactions = async (filter: Transaction.Filter): Promise<void> => {
    setTransactionLoader(true);
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new GetTransactions(transactionRepository, filter);

    const transactions = await useCase.execute();

    dispatch(fetchGetTransactions(transactions));
    dispatch(fetchFilterTransaction(filter));
    setTransactionLoader(false);
  };

  const deleteTransaction = async (transactionId: string): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new DeleteTransaction(transactionRepository, transactionId);
    await useCase.execute();
    dispatch(fetchDeleteTransaction(transactionId));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionLoader,
        createTransaction,
        getTransactions,
        deleteTransaction,
        transactions: state.transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
