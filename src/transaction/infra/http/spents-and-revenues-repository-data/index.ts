import { TransactionAdapter } from '@/transaction/infra/adapter/transaction-adapter';
import { RequestHttpRepository } from '@/core/infra';
import { SpentsAndRevenuesRepository } from '@/transaction/data';
import { Indicator, Transaction } from '@/transaction/domain';
import { Pagination } from '@/core/domain';

type ResponseIndicators = { entrance: Indicator.Server; spent: Indicator.Server; month: number; year: number };

export class SpentsAndRevenuesRepositoryData implements SpentsAndRevenuesRepository {
  async getTransactions(
    walletId: string,
    query?: string,
    page?: number
  ): Promise<Pagination<Transaction[], 'transactions'>> {
    const http = new RequestHttpRepository<unknown, Pagination<Transaction.Response[], 'transactions'>>(
      `${process.env.BASE_URL}/v2`
    );

    const httpResponse = await http.request({
      method: 'get',
      url: `transaction${query}`,
      headers: {
        'wallet-id': walletId,
      },
      urlParams: {
        page,
      },
    });

    const adapter = new TransactionAdapter();
    const adaptee = httpResponse.body.transactions?.map(transactionResponse => adapter.response(transactionResponse));

    return {
      currentPage: httpResponse.body?.currentPage,
      pageSize: httpResponse.body?.pageSize,
      totalPages: httpResponse.body?.totalPages,
      transactions: adaptee,
    };
  }

  async delete(transaction: Transaction, walletId: string): Promise<{ newWalletValue: number }> {
    const http = new RequestHttpRepository<unknown, { newWalletValue: number }>(`${process.env.BASE_URL}/v2`);

    const adapter = new TransactionAdapter();
    const adaptee = adapter.request(transaction);

    const result = await http.request({
      method: 'delete',
      url: `transaction/${transaction._id}`,
      headers: {
        'wallet-id': walletId,
      },
      body: { ...adaptee },
    });

    return result.body;
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

  async create(transaction: Transaction.Data): Promise<{ newWalletValue: number; transaction: Transaction }> {
    const http = new RequestHttpRepository<
      Transaction.Response,
      { newWalletValue: number; transaction: Transaction.Data }
    >(`${process.env.BASE_URL}/v2`);

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

    return { transaction: new Transaction(body.transaction), newWalletValue: body.newWalletValue };
  }

  async update(transaction: Transaction.Data): Promise<{ transaction: Transaction; newWalletValue: number }> {
    const http = new RequestHttpRepository<
      Transaction.Response,
      { newWalletValue: number; transaction: Transaction.Data }
    >(`${process.env.BASE_URL}/v2`);

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

    return { transaction: new Transaction(body.transaction), newWalletValue: body.newWalletValue };
  }
}
