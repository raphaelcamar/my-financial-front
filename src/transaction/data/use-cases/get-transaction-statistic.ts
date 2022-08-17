import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';
import { formatDate } from '@/core/utils';

export class GetTransactionStatistic {
  constructor(private transactionRepository: TransactionRepository, private filter?: Transaction.Filter) {}

  async execute() {
    const query = this.mountFilter(this.filter);
    const result = await this.transactionRepository.getStatistics(query);

    return result;
  }

  mountFilter(filters?: Transaction.Filter): string {
    let query = '';

    if (!filters?.limit && !filters?.start) return '';

    if (filters?.start) {
      query += `?start=${formatDate(filters?.start)}`;
    }

    if (filters?.limit) {
      query += `&limit=${formatDate(filters?.limit)}`;
    }

    return query;
  }
}
