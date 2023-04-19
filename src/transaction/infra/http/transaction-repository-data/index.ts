/* eslint-disable no-use-before-define */
import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';
import { TransactionAdapter, TransactionStatisticsAdapter } from '@/transaction/infra/adapter';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction.Data): Promise<Transaction> {
    const http = new RequestHttpRepository<Transaction.Response, Transaction.Response>(process.env.BASE_URL);

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const httpResponse = await http.request({
      method: 'post',
      url: 'transaction',
      body: adaptee,
    });

    return adapter.response(httpResponse.body);
  }

  async getV2(walletId: string, query?: string): Promise<Transaction[]> {
    const http = new RequestHttpRepository<unknown, Transaction.Response[]>(`${process.env.BASE_URL}/v2`);

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction/${walletId}${query}`,
    });

    const adapter = new TransactionAdapter();
    const adaptee = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return adaptee;
  }

  async get(query?: string): Promise<Transaction[]> {
    const http = new RequestHttpRepository<unknown, Transaction.Response[]>(process.env.BASE_URL);
    const httpResponse = await http.request({
      method: 'get',
      url: `transaction${query}`,
    });

    const adapter = new TransactionAdapter();

    const adaptee = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return adaptee;
  }

  async delete(transactionId: string, walletId: string): Promise<void> {
    const http = new RequestHttpRepository<string, void>(`${process.env.BASE_URL}/v2`);

    await http.request({
      method: 'delete',
      url: `transaction/${walletId}/${transactionId}`,
    });
  }

  async update(transaction: Transaction.Data): Promise<Transaction> {
    const http = new RequestHttpRepository<Transaction.Response, Transaction.Response>(process.env.BASE_URL);
    const adapter = new TransactionAdapter();

    const adapteeRequest = adapter.request(transaction);

    const httpResponse = await http.request({
      method: 'put',
      url: 'transaction/update',
      body: adapteeRequest,
    });

    const adapteeResponse = adapter.response(httpResponse.body);
    return adapteeResponse;
  }

  async getStatistics(queryUrl: string): Promise<Transaction.Statistic> {
    const http = new RequestHttpRepository<Transaction.Filter, Response.Statistic>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction/statistics${queryUrl}`,
    });
    const adapter = new TransactionStatisticsAdapter();
    const adaptee = adapter.response(httpResponse.body);
    return adaptee;
  }

  async getIndicatorsV2(walletId: string, month: number, year: number): Promise<void> {
    const http = new RequestHttpRepository<Transaction.Filter, Response.Statistic>(`${process.env.BASE_URL}/v2`);

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction/${walletId}?month=${month}&year=${year}`,
    });
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
