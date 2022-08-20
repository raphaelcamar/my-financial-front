/* eslint-disable no-use-before-define */
import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';
import { TransactionAdapter, TransactionStatisticsAdapter } from '@/transaction/infra/adapter';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction.Data): Promise<Transaction> {
    const request = new RequestHttpRepository<Transaction.Response, Transaction.Response>();

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const httpResponse = await request.post({
      url: 'transaction',
      body: adaptee,
    });

    return adapter.response(httpResponse.body);
  }

  async get(query?: string): Promise<Transaction[]> {
    const request = new RequestHttpRepository<unknown, Transaction.Response[]>();
    const httpResponse = await request.get({
      url: `transaction${query}`,
    });

    const adapter = new TransactionAdapter();

    const adaptee = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return adaptee;
  }

  async delete(transactionId: string): Promise<void> {
    const request = new RequestHttpRepository<string, void>();

    await request.delete({
      url: `transaction/${transactionId}`,
    });
  }

  async update(transaction: Transaction.Data): Promise<Transaction> {
    const request = new RequestHttpRepository<Transaction.Response, Transaction.Response>();
    const adapter = new TransactionAdapter();

    const adapteeRequest = adapter.request(transaction);

    const httpResponse = await request.put({
      url: 'transaction/update',
      body: adapteeRequest,
    });

    const adapteeResponse = adapter.response(httpResponse.body);
    return adapteeResponse;
  }

  async getStatistics(queryUrl: string): Promise<Transaction.Statistic> {
    const http = new RequestHttpRepository<Transaction.Filter, Response.Statistic>();

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction/statistics${queryUrl}`,
    });
    const adapter = new TransactionStatisticsAdapter();
    const adaptee = adapter.response(httpResponse.body);
    return adaptee;
  }
}

// TODO remove duplicate declaration
export namespace Response {
  export interface Statistic {
    statistics: {
      mostSpent: Transaction.Response;
      totalFilter: number;
      total: number;
      average: number;
    };
    filter: Transaction.Filter;
  }
}
