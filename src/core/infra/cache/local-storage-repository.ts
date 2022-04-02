import { CacheRepository, localStorageKey } from '@/core/data/protocols';

export class LocalStorageRepository<T> implements CacheRepository<T> {
  set(key: localStorageKey, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: localStorageKey): T {
    const cache: T = JSON.parse(localStorage.getItem(key));
    return cache;
  }

  clean(key: localStorageKey): void {
    localStorage.removeItem(key);
  }
}
