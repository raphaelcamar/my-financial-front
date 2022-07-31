import { Transaction } from '@/transaction/domain';

export interface TransactionRepository {
  create(transaction: Transaction.Data): Promise<Transaction>;
  get(queryUrl?: string): Promise<Transaction[]>;
  delete(transactionId: string): Promise<void>;
  update(transaction: Transaction.Data): Promise<Transaction>;
  getStatistics(queryUrl: string): Promise<Transaction.Statistic>;
}
