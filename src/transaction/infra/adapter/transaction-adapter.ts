import { RequestAdapter } from '@/core/data';
import { Transaction } from '@/transaction/domain';

export class TransactionAdapter implements RequestAdapter {
  request(base: Transaction): Transaction.Response {
    const adaptee: Transaction.Response = {
      ...base,
      value: base.cost,
      createdAt: null,
      updatedAt: null,
      billedAt: String(new Date(base.billedAt)),
      amount: base.total / 100,
    };

    delete adaptee.createdAt;
    delete adaptee.updatedAt;

    return adaptee;
  }

  response(base: Transaction.Response): Transaction {
    const adaptee: Transaction.Data = {
      ...base,
      cost: base.value,
      total: base.amount,
      billedAt: new Date(base.billedAt),
      createdAt: new Date(base.createdAt),
      updatedAt: new Date(base.updatedAt),
    };

    return new Transaction(adaptee);
  }
}
