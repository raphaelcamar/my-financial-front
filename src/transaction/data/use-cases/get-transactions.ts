import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';

export class GetTransactions {
  constructor(private transactionRepository: TransactionRepository, private filter?: Transaction.Filter) {}

  async execute(): Promise<Transaction[]> {
    const query = this.mountFilter(this.filter);
    const transaction = await this.transactionRepository.get(query);

    return transaction;
  }

  mountFilter(filters?: Transaction.Filter): string {
    let query = '';
    if (!filters?.limit && !filters?.start) return '';

    if (filters?.start) {
      query += `?start=${filters?.start}`;
    }

    if (filters?.limit) {
      query += `&limit=${filters?.limit}`;
    }

    return query;
  }
}
