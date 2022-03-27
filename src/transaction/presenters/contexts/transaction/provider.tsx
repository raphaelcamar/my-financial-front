import React, { useReducer } from 'react';
import { Transaction } from '@/transaction/domain/entities';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra/http';
import { CreateTransaction } from '@/transaction/data/use-cases';
import { fetchCreateTransaction } from './action';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTransaction = async (transactionData: Transaction): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();
    const useCase = new CreateTransaction(transactionData, transactionRepository);

    const transaction = await useCase.execute();

    dispatch(fetchCreateTransaction(transaction));
  };

  return (
    <TransactionContext.Provider value={{ createTransaction, transactions: state.transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
