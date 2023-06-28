import { SpentsAndRevenuesRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';

export class DeleteTransaction {
  constructor(
    private transactionRepository: SpentsAndRevenuesRepository,
    private transaction: Transaction,
    private walletId: string,
    private transactions: Transaction[]
  ) {}

  async execute(): Promise<{ transactions: Transaction[]; newWalletValue: number }> {
    const result = await this.transactionRepository.delete(this.transaction, this.walletId);
    const filtered = this.transactions.filter(transaction => transaction._id !== this.transaction._id);

    return { transactions: filtered, newWalletValue: result.newWalletValue };
  }
}
