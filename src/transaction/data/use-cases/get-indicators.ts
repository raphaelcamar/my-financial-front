import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepository } from '../protocols';
import { createFilter } from '@/transaction/utils';

export class GetIndicators {
  constructor(
    private walletId: string,
    private filter: Transaction.Filter,
    private spentsAndRevenuesRepository: SpentsAndRevenuesRepository
  ) {}

  async execute() {
    const query = createFilter(this.filter);
    const result = await this.spentsAndRevenuesRepository.getIndicators(this.walletId, query);

    return result;
  }
}
