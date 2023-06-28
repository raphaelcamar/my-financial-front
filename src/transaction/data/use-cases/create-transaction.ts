import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepository } from '@/transaction/data/protocols';

export class CreateTransaction {
  constructor(private transactionRepository: SpentsAndRevenuesRepository, private transaction: Transaction.Data) {}

  async execute(): Promise<{ transaction: Transaction; newWalletValue: number }> {
    const result = await this.transactionRepository.create(this.transaction);

    return { transaction: result.transaction, newWalletValue: result.newWalletValue };
  }
}
