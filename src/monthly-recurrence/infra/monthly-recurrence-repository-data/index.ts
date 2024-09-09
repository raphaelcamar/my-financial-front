/* eslint-disable no-use-before-define */
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
    const http = new RequestHttpRepository<unknown, Pagination<Tag.Data[], 'tags'>>(process.env.BASE_URL);

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

  async deleteTag(tagId: string, walletId: string) {
    const http = new RequestHttpRepository<unknown, Pagination<Tag.Data[], 'tags'>>(process.env.BASE_URL);

    await http.request({
      method: 'delete',
      url: `v2/tag/${tagId}`,
      headers: {
        'wallet-id': walletId,
      },
    });
  }

  async getAllTags(walletId: string) {
    const http = new RequestHttpRepository<unknown, Tag.Data[]>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'get',
      url: `v2/allTags`,
      headers: {
        'wallet-id': walletId,
      },
    });

    const adaptee = httpResponse.body.map(tag => new Tag(tag));

    return adaptee;
  }

  async createMonthlyRecurrence(monthlyRecurrence: MonthlyRecurrence.Create, walletId: string): Promise<any> {
    const http = new RequestHttpRepository<MonthlyRecurrence.Create, MonthlyRecurrence.Data>(process.env.BASE_URL);

    const createdMonthlyRecurrence = await http.request({
      method: 'post',
      url: 'v2/monthly-recurrence/create',
      body: {
        ...monthlyRecurrence,
      },
      headers: {
        'wallet-id': walletId,
      },
    });

    return new MonthlyRecurrence(createdMonthlyRecurrence.body);
  }

  async createTag(tag: Tag, walletId: string): Promise<void> {
    const http = new RequestHttpRepository<unknown, Pagination<Tag.Data[], 'tags'>>(process.env.BASE_URL);

    await http.request({
      method: 'post',
      url: 'v2/tag',
      headers: {
        'wallet-id': walletId,
      },
      body: tag,
    });
  }

  async editTag(tag: Tag, walletId: string): Promise<void> {
    const http = new RequestHttpRepository<unknown, Pagination<Tag.Data[], 'tags'>>(process.env.BASE_URL);

    await http.request({
      method: 'put',
      url: 'v2/tag',
      headers: {
        'wallet-id': walletId,
      },
      body: tag,
    });
  }

  async getIndicators(walletId: string): Promise<ReturnMonthlyRecurrenceType> {
    const http = new RequestHttpRepository<any, any>(process.env.BASE_URL);

    const { body } = await http.request({
      method: 'get',
      url: 'v2/monthly-recurrence/indicators',
      headers: {
        'wallet-id': walletId,
      },
    });

    return body;
  }
}

export type ReturnMonthlyRecurrenceType = {
  mostSpent: {
    value: number;
    title: string;
  };

  lessSpent: {
    value: number;
    title: string;
  };

  mostUsedTag: {
    percentage: number;
    title: string;
  };

  totalSpent: number;
};
