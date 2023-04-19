import { Transaction } from '@/transaction/domain';
import { TransactionRepository } from '@/transaction/data/protocols';
import { formatDate } from '@/core/utils';

export class GetTransactions {
  constructor(
    private transactionRepository: TransactionRepository,
    private walletId: string,
    private filter?: Transaction.Filter
  ) {}

  async execute(): Promise<Transaction[]> {
    const query = this.mountFilter(this.filter);

    const transaction = await this.transactionRepository.getV2(this.walletId, query);
    return transaction;
  }

  mountFilter(filters?: Transaction.Filter): string {
    let query = '';
    if (!filters?.limit && !filters?.start) return '';

    if (filters?.start) {
      query += `?start=${formatDate(filters?.start, 'dd/MM/yyyy')}`;
    }

    if (filters?.limit) {
      query += `&limit=${formatDate(filters?.limit, 'dd/MM/yyyy')}`;
    }

    return query;
  }
}
