import { AccessRepository } from '@/user/data/protocols';
import { CacheRepository } from '@/core/data/protocols';
import { User } from '@/user/domain';

export class CreateUser {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository,
    private subscribeData: User.Subscribe
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.subscribe(this.subscribeData);
    if (userLogged) {
      const token = userLogged?.token;
      delete userLogged.token;

      this.cacheRepository.clear('@user');

      this.cacheRepository.set('@user', userLogged);
      this.cacheRepository.set('@token', token);
    }

    return new User(userLogged);
  }
}
