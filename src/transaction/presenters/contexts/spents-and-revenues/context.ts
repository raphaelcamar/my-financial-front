import { createContext, useContext } from 'react';
import { Indicator, Transaction } from '@/transaction/domain';
import { Pagination } from '@/core/domain';

type PropsSpentAndRevenues = {
  transactions: Transaction[];
  transactionLoader: boolean;
  filter: Transaction.Filter;
  indicators: { entrance: Indicator; spent: Indicator };
  getTransactions: (
    walletId: string,
    filter: Transaction.Filter,
    page?: number
  ) => Promise<Pagination<Transaction[], 'transactions'>>;
  deleteTransaction: (transaction: Transaction, walletId: string) => Promise<{ newWalletValue: number }>;
  getIndicators: (walletId: string, filter: Transaction.Filter) => Promise<void>;
  setTransactionLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<Transaction.Filter>>;
  createTransaction: (transaction: Transaction.Data) => Promise<{ newWalletValue: number }>;
  updateTransaction: (transaction: Transaction.Data, walletId: string) => Promise<{ newWalletValue: number }>;
  closeMonth: (monthToClose: number, year: number, walletId: string) => Promise<void>;
};

export const SpentsAndRevenuesContext = createContext<PropsSpentAndRevenues>({} as PropsSpentAndRevenues);

export const useSpentsAndRevenuesContext = (): PropsSpentAndRevenues => useContext(SpentsAndRevenuesContext);
