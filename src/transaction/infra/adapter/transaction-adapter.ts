import { parseDate } from '@/core/utils';
import { RequestAdapter } from '@/core/data';
import { Transaction, TypeTransaction } from '@/transaction/domain';

export class TransactionAdapter implements RequestAdapter {
  request(base: Transaction.Data): Transaction.Response {
    const adaptee: Transaction.Response = {
      userId: base?.userId,
      type: base?.type,
      topic: base?.topic,
      value: base.cost,
      createdAt: null,
      updatedAt: null,
      _id: base?._id,
      walletId: base.walletId,
      coin: base?.coin,
      anotation: base?.anotation,
      billedAt: parseDate(new Date().toLocaleDateString(), 'dd/MM/yyyy').toISOString(),
      amount: base.total,
      status: base.status,
      paymentType: base.paymentType,
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
      walletId: base?.walletId,
      billedAt: new Date(base.billedAt),
      createdAt: new Date(base.createdAt),
      updatedAt: new Date(base.updatedAt),
    };

    return new Transaction(adaptee);
  }

  private subtractOrAdd(cost: number, type: TypeTransaction): number {
    return type === 'SPENT' ? Number(-cost) : cost;
  }
}
