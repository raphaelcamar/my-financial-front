export type localStorageKey = '@user' | '@token';

export interface CacheRepository {
  clean: (key: localStorageKey) => void;
  set: (key: localStorageKey, value: object | string) => void;
  get: <T>(key: localStorageKey) => T;
}
