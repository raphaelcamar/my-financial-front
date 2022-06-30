/* eslint-disable no-use-before-define */
import React, { useReducer, useState } from 'react';
import { Transaction } from '@/transaction/domain';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra';
import { CreateTransaction, GetTransactions } from '@/transaction/data/use-cases';
import { fetchCreateTransaction, fetchGetTransactions } from './actions';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [transactionLoader, setTransactionLoader] = useState<boolean>(false);

  const createTransaction = async (transactionData: Transaction): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new CreateTransaction(transactionData, transactionRepository);

    const transactions = await useCase.execute();

    dispatch(fetchCreateTransaction(transactions));
  };

  const getTransactions = async (filter?: number): Promise<void> => {
    setTransactionLoader(true);
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new GetTransactions(transactionRepository, filter);

    const transactions = await useCase.execute();

    dispatch(fetchGetTransactions(transactions));
    setTransactionLoader(false);
  };

  return (
    <TransactionContext.Provider
      value={{ transactionLoader, createTransaction, getTransactions, transactions: state.transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
