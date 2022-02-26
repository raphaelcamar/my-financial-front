export interface CacheRepository<T> {
  clean: (key: string) => void;
  set: (key: string, value: object) => void;
  get: (key: string) => T;
}
