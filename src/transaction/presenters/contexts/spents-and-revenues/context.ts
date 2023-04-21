import { createContext, useContext } from 'react';
import { Indicator, Transaction } from '@/transaction/domain';

type PropsSpentAndRevenues = {
  transactions: Transaction[];
  transactionLoader: boolean;
  filter: Transaction.Filter;
  indicators: { entrance: Indicator; spent: Indicator };
  getTransactions: (walletId: string, filter: Transaction.Filter) => Promise<void>;
  deleteTransaction: (walletId: string, transactionId: string) => Promise<void>;
  getIndicators: (walletId: string, filter: Transaction.Filter) => Promise<void>;
  setTransactionLoader: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SpentsAndRevenuesContext = createContext<PropsSpentAndRevenues>({} as PropsSpentAndRevenues);

export const useSpentsAndRevenuesContext = (): PropsSpentAndRevenues => useContext(SpentsAndRevenuesContext);
