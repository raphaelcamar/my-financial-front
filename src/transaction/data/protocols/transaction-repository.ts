import { Transaction } from '@/transaction/domain/entities';

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction>;
}
