import React, { useReducer, useState } from 'react';
import { Transaction } from '@/transaction/domain';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra';
import { CreateTransaction, GetTransactions, DeleteTransaction, UpdateTransaction } from '@/transaction/data/use-cases';
import {
  fetchCreateTransaction,
  fetchDeleteTransaction,
  fetchFilterTransaction,
  fetchGetTransactions,
  fetchUpdateTransaction,
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

    const useCase = new DeleteTransaction(transactionRepository, transactionId, state.transactions);
    const filteredTransactions = await useCase.execute();
    dispatch(fetchDeleteTransaction(filteredTransactions));
  };

  const updateTransaction = async (transaction: Transaction.Data): Promise<void> => {
    const transactionRepository = new TransactionRepositoryData();

    const useCase = new UpdateTransaction(transactionRepository, transaction, state.transactions);

    const filteredTransactions = await useCase.execute();

    dispatch(fetchUpdateTransaction(filteredTransactions));
  };
  return (
    <TransactionContext.Provider
      value={{
        transactionLoader,
        transactions: state.transactions,
        createTransaction,
        getTransactions,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
