import { AccessRepository } from '@/access-and-auth/data/protocols';
import { CacheRepository } from '@/core/data/protocols';
import { User } from '@/access-and-auth/domain';

export class CreateUser<T> {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository<T>,
    private subscribeData: User.Subscribe
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.subscribe(this.subscribeData);
    if (userLogged) {
      this.cacheRepository.set('@user', userLogged);
      this.cacheRepository.set('@token', userLogged.token);
    }

    return userLogged;
  }
}
