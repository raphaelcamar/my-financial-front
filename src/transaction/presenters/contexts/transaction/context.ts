import { createContext, useContext } from 'react';
import { Transaction } from '@/transaction/domain';

type PropsTransaction = {
  transactions: Transaction[];
  transactionLoader: boolean;
  createTransaction: (transaction: Transaction.Data) => Promise<void>;
  getTransactions: (filter?: Transaction.Filter) => Promise<void>;
  deleteTransaction: (transaction: string) => Promise<void>;
};

export const TransactionContext = createContext<PropsTransaction>({} as PropsTransaction);

export const useTransactionContext = (): PropsTransaction => useContext(TransactionContext);
