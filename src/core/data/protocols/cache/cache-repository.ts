export type LocalStorageKey = '@user' | '@token';

export interface CacheRepository<K = LocalStorageKey> {
  clear: (key: K) => void;
  set: (key: K, value: object | string) => void;
  get: <T>(key: K) => T;
  clearAll: () => void;
}
