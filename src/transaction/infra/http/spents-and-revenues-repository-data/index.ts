import { TransactionAdapter } from '@/transaction/infra/adapter/transaction-adapter';
import { RequestHttpRepository } from '@/core/infra';
import { SpentsAndRevenuesRepository } from '@/transaction/data';
import { Indicator, Transaction } from '@/transaction/domain';

type ResponseIndicators = { entrance: Indicator.Server; spent: Indicator.Server; month: number; year: number };

export class SpentsAndRevenuesRepositoryData implements SpentsAndRevenuesRepository {
  async getTransactions(walletId: string, query?: string): Promise<Transaction[]> {
    const http = new RequestHttpRepository<unknown, Transaction.Response[]>(`${process.env.BASE_URL}/v2`);

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction${query}`,
      headers: {
        'wallet-id': walletId,
      },
    });

    const adapter = new TransactionAdapter();
    const adaptee = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return adaptee;
  }

  async delete(transactionId: string, walletId: string): Promise<void> {
    const http = new RequestHttpRepository<string, void>(`${process.env.BASE_URL}/v2`);

    await http.request({
      method: 'delete',
      url: `transaction/${transactionId}`,
      headers: {
        'wallet-id': walletId,
      },
    });
  }

  async getIndicators(walletId: string, query: string): Promise<{ spent: Indicator; entrance: Indicator }> {
    const http = new RequestHttpRepository<string, ResponseIndicators>(`${process.env.BASE_URL}/v2`);

    const { body } = await http.request({
      method: 'get',
      url: `transaction/indicators${query}`,
      headers: {
        'wallet-id': walletId,
      },
    });

    const entranceIndicator = new Indicator({ ...body.entrance, month: body.month, year: body.year }, 'ENTRANCE');
    const spentIndicator = new Indicator({ ...body.spent, month: body.month, year: body.year }, 'SPENT');

    return { entrance: entranceIndicator, spent: spentIndicator };
  }

  async create(transaction: Transaction.Data): Promise<Transaction> {
    const http = new RequestHttpRepository<Transaction.Response, Transaction.Data>(`${process.env.BASE_URL}/v2`);

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const { body } = await http.request({
      method: 'post',
      url: `transaction`,
      body: adaptee,
      headers: {
        'wallet-id': transaction.walletId,
      },
    });

    return new Transaction(body);
  }

  async update(transaction: Transaction.Data): Promise<Transaction> {
    const http = new RequestHttpRepository<Transaction.Response, Transaction.Data>(`${process.env.BASE_URL}/v2`);

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const { body } = await http.request({
      method: 'put',
      url: `transaction`,
      body: adaptee,
      headers: {
        'wallet-id': transaction.walletId,
      },
    });

    return new Transaction(body);
  }
}
