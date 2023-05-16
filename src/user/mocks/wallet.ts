import { faker } from '@faker-js/faker';
import { Wallet } from '../domain';

export class WalletMockBuilder {
  public wallet: Wallet.Data;

  constructor() {
    this.wallet = this.fill();
  }

  private fill(): Wallet.Data {
    return {
      _id: faker.database.mongodbObjectId(),
      color: faker.helpers.arrayElement([
        'primary',
        'grey',
        'green',
        'error',
        'warning',
        'brown',
        'purple',
        'skin',
        'success',
        'info',
      ]),
      name: faker.name.firstName(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      userId: faker.database.mongodbObjectId(),
      value: Number(faker.finance.amount()),
    };
  }
}
