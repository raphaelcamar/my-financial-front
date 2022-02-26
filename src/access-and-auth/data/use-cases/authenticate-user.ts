import {
  AccessRepository,
  CacheRepository,
} from '@/access-and-auth/data/protocols';
import { Login, User } from '@/access-and-auth/domain';

export class AuthenticateUser<T> {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository<T>,
    private loginData: Login
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.login(this.loginData);
    if (userLogged) {
      this.cacheRepository.set('@user', userLogged);
    }

    return userLogged;
  }
}
