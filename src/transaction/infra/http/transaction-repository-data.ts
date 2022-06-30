import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';
import { TransactionAdapter } from '@/transaction/infra/adapter';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction[]> {
    const request = new RequestHttpRepository<Transaction.Response, Transaction.Response[]>();

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const httpResponse = await request.post({
      url: 'transaction',
      body: adaptee,
    });

    const responseBody = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return responseBody;
  }

  async getTransactions(filter?: number): Promise<Transaction[]> {
    const request = new RequestHttpRepository<unknown, Transaction.Response[]>();

    const url = filter ? `transaction&=month${filter}` : 'transaction';

    const httpResponse = await request.get({
      url,
    });

    const adapter = new TransactionAdapter();

    const adaptee = httpResponse.body.map(transactionResponse => adapter.response(transactionResponse));

    return adaptee;
  }
}
