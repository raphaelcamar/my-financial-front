import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';

export class GetTransactionStatistic {
  constructor(private transactionRepository: TransactionRepository, private filter?: Transaction.Filter) {}

  async execute() {
    const result = await this.transactionRepository.getStatistics(this.filter);

    return result;
  }
}
