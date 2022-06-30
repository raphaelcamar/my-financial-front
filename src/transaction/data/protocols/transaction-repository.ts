import { Transaction } from '@/transaction/domain';

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction[]>;
  getTransactions(filter?: number): Promise<Transaction[]>;
}
