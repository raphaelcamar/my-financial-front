import { Tag } from '@/monthly-recurrence/domain';
import { MonthlyRecurrenceRepository } from '../../protocols';
import { Pagination } from '@/core/domain';

export class GetTags {
  constructor(
    private monthlyRecurrenceRepository: MonthlyRecurrenceRepository,
    private page: number,
    private walletId: string
  ) {}

  async execute(): Promise<Pagination<Tag[], 'tags'>> {
    const result = await this.monthlyRecurrenceRepository.getTags(this.page, this.walletId);

    return result;
  }
}
