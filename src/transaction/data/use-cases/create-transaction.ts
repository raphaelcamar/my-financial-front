import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepository } from '@/transaction/data/protocols';

export class CreateTransaction {
  constructor(private transactionRepository: SpentsAndRevenuesRepository, private transaction: Transaction.Data) {}

  async execute(): Promise<Transaction> {
    const transaction = await this.transactionRepository.create(this.transaction);

    return transaction;
  }
}
