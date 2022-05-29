import { UserNotLoggedError } from '@/access-and-auth/data/errors';
import { CacheRepository } from '@/core/data/protocols';
import { AccessRepository } from '@/access-and-auth/data/protocols';
import { User } from '@/access-and-auth/domain';

export class VerifySession {
  constructor(private cacheRepository: CacheRepository, private accessRepository: AccessRepository) {}

  async execute(): Promise<User.Data> {
    const token = this.cacheRepository.get<string>('@token');

    if (!token) throw new UserNotLoggedError();

    const user = await this.accessRepository.verifyAccessToken(String(token));

    this.cacheRepository.clean('@token');
    this.cacheRepository.clean('@user');

    this.cacheRepository.set('@token', user.token);

    delete user.token;
    delete user?.password;

    this.cacheRepository.set('@user', user);

    return user;
  }
}
