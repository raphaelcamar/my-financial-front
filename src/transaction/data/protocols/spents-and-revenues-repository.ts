import { Indicator, Transaction } from '@/transaction/domain';

export interface SpentsAndRevenuesRepository {
  getTransactions(walletId: string, query: string): Promise<Transaction[]>;
  delete(transactionId: string, walletId: string): Promise<void>;
  getIndicators(walletId: string, query: string): Promise<{ spent: Indicator; entrance: Indicator }>;
}
