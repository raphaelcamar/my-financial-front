/* eslint-disable no-use-before-define */
import React, { useReducer } from 'react';
import { Transaction } from '@/transaction/domain';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra';
import { CreateTransaction, GetTransactions } from '@/transaction/data/use-cases';
import { fetchCreateTransaction, fetchGetTransactions } from './actions';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTransaction = async (transactionData: Transaction): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new CreateTransaction(transactionData, transactionRepository);

    const transaction = await useCase.execute();

    dispatch(fetchCreateTransaction(transaction));
  };

  const getTransactions = async (): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new GetTransactions(transactionRepository);

    const transactions = await useCase.execute();

    dispatch(fetchGetTransactions(transactions));
  };

  return (
    <TransactionContext.Provider value={{ createTransaction, getTransactions, transactions: state.transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
