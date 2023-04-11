import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';

export class DeleteTransaction {
  constructor(
    private transactionRepository: TransactionRepository,
    private transactionId: string,
    private walletId: string,
    private transactions: Transaction[]
  ) {}

  async execute() {
    await this.transactionRepository.delete(this.transactionId, this.walletId);
    const filtered = this.transactions.filter(transaction => transaction._id !== this.transactionId);

    return filtered;
  }
}
