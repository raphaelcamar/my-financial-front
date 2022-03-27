import { createContext, useContext } from 'react';
import { Transaction } from '@/transaction/domain/entities';

type PropsTransaction = {
  transactions: Transaction[];
  createTransaction: (transaction: Transaction) => Promise<void>;
};

export const TransactionContext = createContext<PropsTransaction>({} as PropsTransaction);

export const useTransactionContext = (): PropsTransaction => useContext(TransactionContext);
