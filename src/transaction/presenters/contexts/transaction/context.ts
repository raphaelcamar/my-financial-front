import { createContext, useContext } from 'react';
import { Transaction } from '@/transaction/domain';

type PropsTransaction = {
  transactions: Transaction[];
  transactionLoader: boolean;
  filter: Transaction.Filter;
  statistic: Transaction.Statistic;
  getStatisticsByFilter: (filter?: Transaction.Filter) => Promise<void>;
  createTransaction: (transaction: Transaction.Data) => Promise<void>;
  updateTransaction: (transaction: Transaction.Data) => Promise<void>;
  getTransactions: (filter: Transaction.Filter, walletId: string) => Promise<void>;
  deleteTransaction: (transactionId: string, walletId: string) => Promise<void>;
  setTransactionLoader: React.Dispatch<React.SetStateAction<boolean>>;
  getTransactionsV2: (filter: Transaction.Filter, walletId: string) => Promise<void>;
};

export const TransactionContext = createContext<PropsTransaction>({} as PropsTransaction);

export const useTransactionContext = (): PropsTransaction => useContext(TransactionContext);
