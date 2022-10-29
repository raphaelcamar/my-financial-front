import { faker } from '@faker-js/faker';
import { Tag } from '../domain';

export class TagMockBuilder {
  public tag: Tag.Data;
  constructor() {
    this.tag = this.fill();
  }

  private fill(): Tag.Data {
    return {
      color: faker.helpers.arrayElement([
        'primary',
        'error',
        'warning',
        'grey',
        'success',
        'info',
        'green',
        'brown',
        'purple',
        'skin',
      ]),
      createdAt: faker.date.recent(),
      description: faker.random.words(3),
      title: faker.random.word(),
      userId: faker.database.mongodbObjectId(),
      _id: faker.database.mongodbObjectId(),
      inactivatedAt: faker.helpers.arrayElement([faker.date.recent(), null]),
    };
  }

  public getArray(size: number): Tag.Data[] {
    const arr = Array(size)
      .fill(null)
      .map(() => ({ ...this.fill() }));

    return arr;
  }

  public getInactive(size: number): Tag.Data[] {
    const arr = this.getArray(size);
    return arr.filter(tag => tag.inactivatedAt !== null);
  }

  public getActive(size: number): Tag.Data[] {
    const arr = this.getArray(size);
    return arr.filter(tag => tag.inactivatedAt === null);
  }
}
