import { Pagination } from '@/core/domain';
import { Indicator, Transaction } from '@/transaction/domain';

export interface SpentsAndRevenuesRepository {
  getTransactions(walletId: string, query: string, page?: number): Promise<Pagination<Transaction[], 'transactions'>>;
  delete(transaction: Transaction, walletId: string): Promise<{ newWalletValue: number }>;
  getIndicators(walletId: string, query: string): Promise<{ spent: Indicator; entrance: Indicator }>;
  create(transaction: Transaction.Data): Promise<{ transaction: Transaction; newWalletValue: number }>;
  update(transaction: Transaction.Data): Promise<{ transaction: Transaction; newWalletValue: number }>;
}
