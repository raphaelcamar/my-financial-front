import { CacheRepository } from '@/core/data/protocols';

export class LocalStorageRepository<K extends string> implements CacheRepository<K> {
  set(key: K, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: K): T {
    const cache: T = JSON.parse(localStorage.getItem(key));
    return cache;
  }

  clear(key: K): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
