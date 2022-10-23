import { faker } from '@faker-js/faker';

export class ProfileMockBuilder {
  public profilePicture: string;
  constructor() {
    this.profilePicture = this.fill();
  }

  private fill(): string {
    return faker.image.avatar();
  }
}
