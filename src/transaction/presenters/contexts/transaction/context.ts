import { createContext, useContext } from 'react';
import { Transaction } from '@/transaction/domain';

type PropsTransaction = {
  transactions: Transaction[];
  transactionLoader: boolean;
  filter: Transaction.Filter;
  statistic: Transaction.Statistic;
  getStatisticsByFilter: () => Promise<void>;
  createTransaction: (transaction: Transaction.Data) => Promise<void>;
  updateTransaction: (transaction: Transaction.Data) => Promise<void>;
  getTransactions: (filter?: Transaction.Filter) => Promise<void>;
  deleteTransaction: (transaction: string) => Promise<void>;
};

export const TransactionContext = createContext<PropsTransaction>({} as PropsTransaction);

export const useTransactionContext = (): PropsTransaction => useContext(TransactionContext);
