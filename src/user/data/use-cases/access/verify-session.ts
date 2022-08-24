import { UserNotLoggedError } from '@/user/data/errors';
import { CacheRepository } from '@/core/data/protocols';
import { AccessRepository } from '@/user/data/protocols';
import { User } from '@/user/domain';

export class VerifySession {
  constructor(private cacheRepository: CacheRepository, private accessRepository: AccessRepository) {}

  async execute(): Promise<User.Data> {
    const token = this.cacheRepository.get<string>('@token');

    if (!token) throw new UserNotLoggedError();

    const user = await this.accessRepository.verifyAccessToken(String(token));

    this.cacheRepository.clear('@token');
    this.cacheRepository.clear('@user');

    this.cacheRepository.set('@token', user.token);

    delete user.token;
    delete user?.password;

    this.cacheRepository.set('@user', user);

    return user;
  }
}
