import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain';
import { TransactionAdapter } from '@/transaction/infra/adapter';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction> {
    const request = new RequestHttpRepository<Transaction.Response, Transaction>();

    const adapter = new TransactionAdapter();

    const adaptee = adapter.request(transaction);

    const httpResponse = await request.post({
      url: 'transaction',
      body: adaptee,
    });

    return httpResponse.body;
  }
}
