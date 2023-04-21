import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepository } from '../protocols';

export class GetIndicators {
  constructor(
    private walletId: string,
    private filter: Transaction.Filter,
    private spentsAndRevenuesRepository: SpentsAndRevenuesRepository
  ) {}

  async execute() {
    const query = this.mountFilter(this.filter);
    const result = await this.spentsAndRevenuesRepository.getIndicators(this.walletId, query);

    return result;
  }

  mountFilter(filters?: Transaction.Filter): string {
    let query = '';
    if (!filters?.limit && !filters?.start) return '';

    const date = new Date(filters?.start);
    if (filters?.start) {
      query += `?month=${date.getMonth() + 1}`;
    }

    if (filters?.limit) {
      query += `&year=${date.getFullYear()}`;
    }

    return query;
  }
}
