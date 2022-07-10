import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';
import { TransactionAdapter } from '@/transaction/infra/adapter';

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

  async getStatistics(filter: Transaction.Filter): Promise<Transaction.Statistic> {
    const request = new RequestHttpRepository<Transaction.Filter, any>();

    const httpResponse = await request.get({
      url: 'transaction/statistics',
      body: filter,
    });

    return httpResponse.body;
  }
}
