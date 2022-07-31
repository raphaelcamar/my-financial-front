import { CacheRepository, localStorageKey } from '@/core/data';

export class MockCacheRepository implements CacheRepository {
  private readonly localStorage = new Map();

  clear(key: localStorageKey): void {
    this.localStorage.delete(key);
  }

  set(key: localStorageKey, value: string | object): void {
    this.localStorage.set(key, value);
  }

  get<T>(key: localStorageKey): T {
    return this.localStorage.get(key) as T;
  }

  clearAll() {
    this.localStorage.clear();
  }
}
