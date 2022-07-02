import { Transaction } from '@/transaction/domain';

export interface TransactionRepository {
  create(transaction: Transaction.Data): Promise<Transaction>;
  getTransactions(queryUrl?: string): Promise<Transaction[]>;
  deleteTransacion(transactionId: string): Promise<void>;
}
