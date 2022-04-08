import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';

export class GetTransactions {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    const transaction = await this.transactionRepository.getTransactions();

    return transaction;
  }
}
