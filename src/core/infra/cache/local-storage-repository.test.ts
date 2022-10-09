import { faker } from '@faker-js/faker';
import { MockCacheRepository } from '@/core/tests/mocks';

type LocalStorageKeys = 'test' | 'data';

const makeSut = () => {
  const localStorage = new MockCacheRepository<LocalStorageKeys>();
  const value = JSON.parse(faker.datatype.json());

  return {
    localStorage,
    value,
  };
};

describe('LocalStorageRepository', () => {
  test('Should be able to save values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);

    expect(localStorage.get('test')).toBe(value);
  });

  test('Should be able to get values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);
    expect(localStorage.get('test')).toBe(value);
  });

  test('Should be able to clear values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);
    localStorage.set('data', value);
    localStorage.clear('test');
    expect(localStorage.get('test')).toBeFalsy();
    expect(localStorage.get('data')).toBe(value);
  });

  test('Should be able to clear all values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);
    localStorage.set('data', value);
    localStorage.clearAll();
    expect(localStorage.get('test')).toBeFalsy();
    expect(localStorage.get('data')).toBeFalsy();
  });
});
