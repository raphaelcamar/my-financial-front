import { Transaction } from '@/transaction/domain';

export interface TransactionRepository {
  create(transaction: Transaction.Data): Promise<Transaction[]>;
  getTransactions(filter?: number): Promise<Transaction[]>;
}
