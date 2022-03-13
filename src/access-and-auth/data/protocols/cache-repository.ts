export type localStorageKey = '@user' | '@token';

export interface CacheRepository<T> {
  clean: (key: localStorageKey) => void;
  set: (key: localStorageKey, value: object | string) => void;
  get: (key: localStorageKey) => T;
}
