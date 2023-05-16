import { faker } from '@faker-js/faker';
import { User } from '@/user/domain';
import { WalletMockBuilder } from './wallet';

export class UserMockBuilder {
  public user: User.Data;
  constructor() {
    this.user = this.fill();
  }

  private fill(): User.Data {
    return {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      token: faker.database.mongodbObjectId(),
      _id: faker.database.mongodbObjectId(),
      birthDate: faker.date.past().toISOString(),
      lastname: faker.name.lastName(),
      pictureUrl: faker.image.avatar(),
      profession: faker.name.jobTitle(),
      salary: faker.datatype.number({ max: 9999999, min: 99999 }),
      wallets: [
        new WalletMockBuilder().wallet,
        new WalletMockBuilder().wallet,
        new WalletMockBuilder().wallet,
        new WalletMockBuilder().wallet,
      ],
      currentWallet: new WalletMockBuilder().wallet,
    };
  }
}
