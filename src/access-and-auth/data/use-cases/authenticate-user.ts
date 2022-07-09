import { AccessRepository } from '@/access-and-auth/data/protocols';
import { CacheRepository } from '@/core/data/protocols';
import { User } from '@/access-and-auth/domain';

export class AuthenticateUser {
  constructor(
    private accessRepository: AccessRepository,
    private cacheRepository: CacheRepository,
    private loginData: User.Login
  ) {}

  async execute(): Promise<User> {
    const userLogged = await this.accessRepository.login(this.loginData);
    if (userLogged) {
      this.cacheRepository.clear('@token');
      this.cacheRepository.clear('@user');

      delete userLogged?.password;

      this.cacheRepository.set('@user', userLogged);
      this.cacheRepository.set('@token', userLogged.token);
    }

    return userLogged;
  }
}
