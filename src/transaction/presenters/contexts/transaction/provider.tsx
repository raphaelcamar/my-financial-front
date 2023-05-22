import React, { useReducer, useState } from 'react';
import { Transaction } from '@/transaction/domain';
import { TransactionContext } from './context';
import { initialState, reducer } from './reducers';
import { TransactionRepositoryData } from '@/transaction/infra';
import {
  CreateTransaction,
  GetTransactions,
  DeleteTransaction,
  UpdateTransaction,
  GetTransactionStatistic,
} from '@/transaction/data/use-cases';
import {
  fetchCreateTransaction,
  fetchDeleteTransaction,
  fetchFilterTransaction,
  fetchGetStatistics,
  fetchGetTransactions,
  fetchUpdateTransaction,
} from './actions';
import { delay } from '@/core/utils';

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [transactionLoader, setTransactionLoader] = useState<boolean>(false);

  const createTransaction = async (transactionData: Transaction.Data): Promise<void> => {
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new CreateTransaction(transactionRepository, transactionData);
    // await useCase.execute();
    // const getTransactions = new GetTransactions(transactionRepository, transactionData.walletId, state.filter);
    // const result = await getTransactions.execute();
    // dispatch(fetchCreateTransaction(result));
  };

  const getTransactions = async (filter: Transaction.Filter, walletId: string): Promise<void> => {
    // setTransactionLoader(true);
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new GetTransactions(transactionRepository, walletId, filter);
    // const transactions = await useCase.execute();
    // dispatch(fetchGetTransactions(transactions));
    // dispatch(fetchFilterTransaction(filter));
    // setTransactionLoader(false);
  };

  const getTransactionsV2 = async (filter: Transaction.Filter, walletId: string): Promise<void> => {
    // setTransactionLoader(true);
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new GetTransactions(transactionRepository, walletId, filter);
    // const transactions = await useCase.execute();
    // await delay(2000);
    // dispatch(fetchGetTransactions(transactions));
    // dispatch(fetchFilterTransaction(filter));
    // setTransactionLoader(false);
  };

  const deleteTransaction = async (transactionId: string, walletId: string): Promise<void> => {
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new DeleteTransaction(transactionRepository, transactionId, walletId, state.transactions);
    // const filteredTransactions = await useCase.execute();
    // dispatch(fetchDeleteTransaction(filteredTransactions));
  };

  const updateTransaction = async (transaction: Transaction.Data): Promise<void> => {
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new UpdateTransaction(transactionRepository, transaction, state.transactions);
    // const filteredTransactions = await useCase.execute();
    // dispatch(fetchUpdateTransaction(filteredTransactions));
  };

  const getStatisticsByFilter = async (filter: Transaction.Filter): Promise<void> => {
    // const transactionRepository = new TransactionRepositoryData();
    // const useCase = new GetTransactionStatistic(transactionRepository, filter);
    // await delay(500);
    // const statistics = await useCase.execute();
    // dispatch(fetchGetStatistics(statistics));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionLoader,
        filter: state.filter,
        transactions: state.transactions,
        statistic: state.statistic,
        createTransaction,
        getTransactions,
        deleteTransaction,
        updateTransaction,
        getStatisticsByFilter,
        setTransactionLoader,
        getTransactionsV2,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
