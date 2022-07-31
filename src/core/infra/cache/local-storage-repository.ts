import { CacheRepository, localStorageKey } from '@/core/data/protocols';

export class LocalStorageRepository implements CacheRepository {
  set(key: localStorageKey, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: localStorageKey): T {
    const cache: T = JSON.parse(localStorage.getItem(key));
    return cache;
  }

  clear(key: localStorageKey): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
