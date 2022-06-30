import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';

export class GetTransactions {
  constructor(private transactionRepository: TransactionRepository, private filter?: number) {}

  async execute(): Promise<Transaction[]> {
    const transaction = await this.transactionRepository.getTransactions(this.filter);

    return transaction;
  }
}
