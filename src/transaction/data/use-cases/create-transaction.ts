import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';

export class CreateTransaction {
  constructor(private transaction: Transaction, private transactionRepository: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    const transaction = await this.transactionRepository.create(this.transaction);

    return transaction;
  }
}
