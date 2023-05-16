import { faker } from '@faker-js/faker';

export class SpentsAndRevenuesIndicatorsBuilder {
  public indicators: any;

  constructor() {
    //
  }

  public static build() {
    return {
      entrance: {
        differencePercentage: faker.finance.amount(0, 100),
        value: faker.finance.amount(),
        differenceValue: faker.finance.amount(),
      },
      spent: {
        differencePercentage: faker.finance.amount(0, 100),
        value: faker.finance.amount(),
        differenceValue: faker.finance.amount(),
      },
      month: faker.datatype.number({ max: 12, min: 1 }),
      year: faker.datatype.number({ max: 2030, min: 1960 }),
    };
  }
}
