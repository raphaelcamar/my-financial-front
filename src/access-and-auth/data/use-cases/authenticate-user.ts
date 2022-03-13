import { AccessRepository, CacheRepository } from '@/access-and-auth/data/protocols';
import { UserLogin, User } from '@/access-and-auth/domain';

export class AuthenticateUser<T> {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository<T>,
    private loginData: UserLogin
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
