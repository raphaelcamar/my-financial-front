import { CacheRepository } from '@/access-and-auth/data/protocols';

export class LocalStorageRepository<T> implements CacheRepository<T> {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): T {
    const cache: T = JSON.parse(localStorage.getItem(key));
    return cache;
  }

  clean(key: string): void {
    localStorage.removeItem(key);
  }
}
