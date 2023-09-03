import { Pagination } from '@/core/domain';
import { RequestHttpRepository } from '@/core/infra';
import { MonthlyRecurrenceRepository } from '@/monthly-recurrence/data';
import { MonthlyRecurrence, Tag } from '@/monthly-recurrence/domain';

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

  async getTags(page: number, walletId: string): Promise<Pagination<Tag[], 'tags'>> {
    const http = new RequestHttpRepository<unknown, Pagination<Tag[], 'tags'>>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'get',
      url: `v2/tag?page=${page}`,
      headers: {
        'wallet-id': walletId,
      },
    });

    const adaptee = httpResponse.body.tags.map(tag => new Tag(tag));

    return { ...httpResponse.body, tags: adaptee };
  }
}
