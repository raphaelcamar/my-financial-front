/* eslint-disable no-use-before-define */
import { RequestAdapter } from '@/core/data';
import { Transaction } from '@/transaction/domain';
import { Response } from '@/transaction/infra/http';

export class TransactionStatisticsAdapter implements RequestAdapter {
  request(base: Transaction.Data): Transaction.Response {
    return null;
  }

  response(base: Response.Statistic): Transaction.Statistic {
    const adaptee: Transaction.Statistic = {
      mostSpent: {
        description: base?.statistics?.mostSpent?.anotation,
        filter: base?.filter,
        value: base?.statistics?.mostSpent?.value,
      },
      averageSpent: {
        filter: base?.filter,
        value: base?.statistics?.average,
      },
      total: base?.statistics?.total,
      totalFilter: {
        filter: base?.filter,
        value: base?.statistics?.total,
      },
    };

    return adaptee;
  }
}
