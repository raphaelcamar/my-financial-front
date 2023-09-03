import { MonthlyRecurrenceRepository } from '@/monthly-recurrence/data';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

export class GetMonthlyRecurrences {
  constructor(
    private monthlyRecurrenceRepository: MonthlyRecurrenceRepository,
    private filter: { input?: string; tags?: Array<{ id: string }> },
    private walletId: string
  ) {}

  async execute(): Promise<MonthlyRecurrence[]> {
    const query = this.mountQuery();

    const result = await this.monthlyRecurrenceRepository.getMonthlyRecurrences(query, this.walletId);

    return result;
  }

  private mountQuery(): string {
    let query = '';
    if (this.filter?.input?.length > 0) {
      query += `name=${this.filter.input}`;
    }

    if (this.filter?.tags?.length > 0) {
      query += `&tags=${this.filter.tags.map(tag => tag.id).join(',')}`;
    }

    return query;
  }
}
