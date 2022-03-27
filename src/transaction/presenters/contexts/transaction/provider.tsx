import React, { useReducer } from 'react';
import { Transaction } from '@/transaction/domain/entities';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTransaction = async (transaction: Transaction): Promise<void> => {
    // Do stuff
  };

  return (
    <TransactionContext.Provider value={{ createTransaction, transactions: state.transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
