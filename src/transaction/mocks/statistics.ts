import { faker } from '@faker-js/faker';
import { Transaction } from '@/transaction/domain';
import { Response } from '../infra';
import { TransactionMockBuilder } from './transaction';
import { formatDateBR } from '@/core/utils';

export class StatisticsMockBuilder {
  public statistics: Response.Statistic;

  constructor(private filters: Transaction.Filter) {
    this.statistics = {
      ...this.fill(),
      filter: {
        limit: this.filters.limit,
        start: this.filters.start,
      },
    };
  }

  private fill(): Response.Statistic {
    return {
      filter: this.getRandomFilters(),
      statistics: {
        average: this.getRandomValue(),
        mostSpent: { ...new TransactionMockBuilder().transaction },
        total: this.getRandomValue(),
        totalFilter: this.getRandomValue(),
      },
    };
  }

  private getRandomFilters(): Transaction.Filter {
    return {
      limit: formatDateBR(faker.date.recent().toISOString()),
      start: formatDateBR(faker.date.past().toISOString()),
    };
  }

  private getRandomValue(): number {
    return faker.datatype.number({ min: -500, max: 500 });
  }
}
