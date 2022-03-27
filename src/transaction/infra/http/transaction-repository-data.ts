import { AxiosHttpClient } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain/entities';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction> {
    const request = new AxiosHttpClient<Transaction, Transaction>();

    const httpResponse = await request.post({
      url: 'transaction',
      body: transaction,
    });

    return httpResponse.body;
  }
}
