import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepository } from '@/transaction/data/protocols';

export class UpdateTransaction {
  constructor(
    private transactionRepository: SpentsAndRevenuesRepository,
    private transaction: Transaction.Data,
    private transactions: Transaction[]
  ) {}

  async execute() {
    const updatedTransaction = await this.transactionRepository.update(this.transaction);
    const index = this.transactions.findIndex(transaction => transaction._id === this.transaction._id);
    const newArr = this.transactions;
    newArr[index] = updatedTransaction;

    return newArr;
  }
}
