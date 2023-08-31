import { MonthlyRecurrenceRepository } from '@/monthly-recurrence/data';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

export class GetMonthlyRecurrences {
  constructor(
    private monthlyRecurrenceRepository: MonthlyRecurrenceRepository,
    private filter: { input: string; tags: Array<{ id: string }> },
    private walletId: string
  ) {}

  async execute(): Promise<MonthlyRecurrence[]> {
    const query = this.mountQuery();
    const result = await this.monthlyRecurrenceRepository.getMonthlyRecurrences(query, this.walletId);

    return result;
  }

  private mountQuery(): string {
    return '';
  }
}
