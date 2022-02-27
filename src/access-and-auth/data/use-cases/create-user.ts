import { AccessRepository, CacheRepository } from '@/access-and-auth/data/protocols';
import { User, UserSubscribe } from '@/access-and-auth/domain';

export class CreateUser<T> {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository<T>,
    private subscribeData: UserSubscribe
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.subscribe(this.subscribeData);
    if (userLogged) {
      this.cacheRepository.set('@user', userLogged);
    }

    return userLogged;
  }
}
