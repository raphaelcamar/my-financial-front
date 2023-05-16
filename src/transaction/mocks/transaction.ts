import { faker } from '@faker-js/faker';
import { PaymentType, Transaction, TypeStatus } from '@/transaction/domain';

export class TransactionBuilder {
  public transaction: Transaction.Response;
  private constructor() {
    //
  }

  public static build(): Transaction.Response {
    return {
      topic: faker.helpers.arrayElement(['FOOD', 'TRANSPORT', 'HEALTH', 'OTHER', 'SALARY']) as any,
      type: faker.helpers.arrayElement(['ENTRANCE', 'SPENT']) as any,
      userId: faker.database.mongodbObjectId(),
      anotation: faker.random.words(10),
      createdAt: new Date().toISOString(),
      _id: faker.database.mongodbObjectId(),
      billedAt: faker.date.past().toISOString(),
      value: faker.datatype.number({ max: 9999999, min: 99999 }),
      amount: faker.datatype.number({ max: 9999999, min: 99999 }),
      paymentType: faker.helpers.arrayElement([
        'CREDIT',
        'DEBIT',
        'MONEY',
        'PIX',
        'TRANSFER',
        'CRYPTO',
        'BANK_SLIP',
        'OTHER',
      ]) as PaymentType,
      status: faker.helpers.arrayElement(['FINISHED', 'PENDING']) as TypeStatus,
      walletId: faker.database.mongodbObjectId(),
      coin: 'BRL',
    };
  }

  static getArray(size: number): Transaction.Response[] {
    const arr = Array(size)
      .fill(null)
      .map(() => ({ ...this.build() }));

    return arr;
  }
}
