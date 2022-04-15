import { AccessRepository } from '@/access-and-auth/data/protocols';
import { CacheRepository } from '@/core/data/protocols';
import { User } from '@/access-and-auth/domain';

export class CreateUser {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository,
    private subscribeData: User.Subscribe
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.subscribe(this.subscribeData);
    if (userLogged) {
      delete userLogged.token;

      this.cacheRepository.clean('@user');
      this.cacheRepository.clean('@token');

      this.cacheRepository.set('@user', userLogged);
      this.cacheRepository.set('@token', userLogged.token);
    }

    return userLogged;
  }
}
