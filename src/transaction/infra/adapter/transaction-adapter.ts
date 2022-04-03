import { RequestAdapter } from '@/core/data';
import { Transaction } from '@/transaction/domain/entities';

export class TransactionAdapter implements RequestAdapter {
  request(base: Transaction): Transaction.Response {
    const adaptee: Transaction.Response = {
      ...base,
      value: base.cost,
      createdAt: new Date(),
      updatedAt: new Date(),
      billedAt: new Date(base.billedAt),
    };

    delete adaptee.createdAt;
    delete adaptee.updatedAt;

    return adaptee;
  }

  response(base: Transaction.Response): Transaction {
    const adaptee: Transaction.Data = {
      ...base,
      cost: base.value,
    };

    return new Transaction(adaptee);
  }
}
