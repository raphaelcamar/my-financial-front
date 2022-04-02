import { CacheRepository } from '@/core/data/protocols';

export class VerifySession<T> {
  constructor(private cacheRepository: CacheRepository<T>) {}

  execute(): T {
    const user = this.cacheRepository.get('@user');
    return user;
  }
}
