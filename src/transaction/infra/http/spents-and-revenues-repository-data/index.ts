import { TransactionAdapter } from '@/transaction/infra/adapter/transaction-adapter';
import { RequestHttpRepository } from '@/core/infra';
import { SpentsAndRevenuesRepository } from '@/transaction/data';
import { Indicator, Transaction } from '@/transaction/domain';

export class SpentsAndRevenuesRepositoryData implements SpentsAndRevenuesRepository {
  async getTransactions(walletId: string, query?: string): Promise<Transaction[]> {
    const http = new RequestHttpRepository<unknown, Transaction.Response[]>(`${process.env.BASE_URL}/v2`);

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction/${walletId}${query}`,
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

  async getIndicators(walletId: string, query: string): Promise<{ spent: Indicator; entrance: Indicator }> {
    const http = new RequestHttpRepository<
      string,
      { entrance: Indicator.Server; spent: Indicator.Server; month: number; year: number }
    >(`${process.env.BASE_URL}/v2`);

    const { body } = await http.request({
      method: 'get',
      url: `transaction/${walletId}/indicators${query}`,
    });

    const entranceIndicator = new Indicator({ ...body.entrance, month: body.month, year: body.year }, 'ENTRANCE');
    const spentIndicator = new Indicator({ ...body.spent, month: body.month, year: body.year }, 'SPENT');

    return { entrance: entranceIndicator, spent: spentIndicator };
  }
}
