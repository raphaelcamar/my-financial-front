import { faker } from '@faker-js/faker';
import { Transaction } from '@/transaction/domain';

export class TransactionMockBuilder {
  public transaction: Transaction.Response;
  constructor() {
    this.transaction = this.fill();
  }

  private fill(): Transaction.Response {
    return {
      topic: faker.helpers.arrayElements(['FOOD', 'TRANSPORT', 'HEALTH', 'OTHER', 'SALARY'], 1)[0] as any,
      type: faker.helpers.arrayElements(['ENTRANCE', 'SPENT'], 1)[0] as any,
      userId: faker.database.mongodbObjectId(),
      anotation: faker.random.words(10),
      createdAt: new Date().toISOString(),
      _id: faker.database.mongodbObjectId(),
      billedAt: faker.date.past().toISOString(),
      value: faker.datatype.number({ max: 9999999, min: 99999 }),
      amount: faker.datatype.number({ max: 9999999, min: 99999 }),
    };
  }

  getArray(size: number): Transaction.Response[] {
    const arr = Array(size)
      .fill(null)
      .map(() => ({ ...this.fill() }));

    return arr;
  }
}
