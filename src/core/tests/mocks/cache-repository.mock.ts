import { CacheRepository } from '@/core/data';

export class MockCacheRepository<K> implements CacheRepository<K> {
  private readonly localStorage = new Map();

  clear(key: K): void {
    this.localStorage.delete(key);
  }

  set(key: K, value: string | object): void {
    this.localStorage.set(key, value);
  }

  get<T>(key: K): T {
    return this.localStorage.get(key) as T;
  }

  clearAll() {
    this.localStorage.clear();
  }
}
