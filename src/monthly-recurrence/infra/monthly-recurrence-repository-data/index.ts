import { RequestHttpRepository } from '@/core/infra';
import { MonthlyRecurrenceRepository } from '@/monthly-recurrence/data';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';

export class MonthlyRecurrenceRepositoryData implements MonthlyRecurrenceRepository {
  async getMonthlyRecurrences(filter: string, walletId: string): Promise<MonthlyRecurrence[]> {
    const http = new RequestHttpRepository<unknown, MonthlyRecurrence.Data[]>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'get',
      url: `v2/monthly-recurrence?${filter}`,
      headers: {
        'wallet-id': walletId,
      },
    });

    const adaptee = httpResponse.body.map(monthlyRecurrence => new MonthlyRecurrence(monthlyRecurrence));
    return adaptee;
  }
}
