import { RequestHttpRepository } from '@/core/infra';
import { TransactionRepository } from '@/transaction/data';
import { Transaction } from '@/transaction/domain/entities';

export class TransactionRepositoryData implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction> {
    const request = new RequestHttpRepository<Transaction, Transaction>();

    const httpResponse = await request.post({
      url: 'transaction',
      body: transaction,
    });

    return httpResponse.body;
  }
}
