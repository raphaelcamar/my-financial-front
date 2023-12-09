import { faker } from '@faker-js/faker';
import { MonthlyRecurrence } from '../domain';
import { TagMockBuilder } from './tag';

export class MonthlyRecurrenceMockBuilder {
  public monthlyRecurrence: MonthlyRecurrence.Data;
  constructor() {
    this.monthlyRecurrence = this.fill();
  }

  private fill(): MonthlyRecurrence.Data {
    return {
      _id: faker.database.mongodbObjectId(),
      description: faker.lorem.sentence(10),
      dueDate: faker.datatype.number({ max: 31, min: 1 }),
      expirationDate: faker.date.future(),
      paymentType: faker.helpers.arrayElement(['DEBIT', 'BANK_SLIP', 'CREDIT', 'DEBIT', 'OTHER']),
      tags: [...new TagMockBuilder().getArray(faker.datatype.number({ min: 3, max: 15 }))],
      title: faker.name.firstName(),
      userId: faker.database.mongodbObjectId(),
      value: faker.datatype.number(),
      walletId: faker.database.mongodbObjectId(),
      inactivatedAt: faker.helpers.arrayElement([null, faker.date.past()]),
    };
  }

  public getArray(size: number): MonthlyRecurrence.Data[] {
    const arr = Array(size)
      .fill(null)
      .map(() => ({ ...this.fill() }));

    return arr;
  }
}
