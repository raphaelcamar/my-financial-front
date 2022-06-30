import { createContext, useContext } from 'react';
import { Transaction } from '@/transaction/domain';

type PropsTransaction = {
  transactions: Transaction[];
  transactionLoader: boolean;
  createTransaction: (transaction: Transaction) => Promise<void>;
  getTransactions: (filter?: number) => Promise<void>;
};

export const TransactionContext = createContext<PropsTransaction>({} as PropsTransaction);

export const useTransactionContext = (): PropsTransaction => useContext(TransactionContext);
