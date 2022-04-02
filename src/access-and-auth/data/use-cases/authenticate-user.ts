import { AccessRepository } from '@/access-and-auth/data/protocols';
import { CacheRepository } from '@/core/data/protocols';
import { User } from '@/access-and-auth/domain/entities';

export class AuthenticateUser<T> {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository<T>,
    private loginData: User.Login
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.login(this.loginData);
    if (userLogged) {
      this.cacheRepository.set('@user', userLogged);
      this.cacheRepository.set('@token', userLogged.token);
    }

    return userLogged;
  }
}
