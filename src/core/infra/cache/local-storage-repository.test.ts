import { faker } from '@faker-js/faker';

import 'jest-localstorage-mock';
import { LocalStorageRepository } from './local-storage-repository';

type LocalStorageKeys = 'test' | 'data';

const makeSut = () => {
  const localStorage = new LocalStorageRepository<LocalStorageKeys>();
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

    expect(localStorage.get('test')).toStrictEqual(value);
  });

  test('Should be able to get values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);

    expect(localStorage.get('test')).toStrictEqual(value);
  });

  test('Should be able to clear values into localStorage', () => {
    const { localStorage, value } = makeSut();

    localStorage.set('test', value);
    localStorage.set('data', value);
    localStorage.clear('test');

    expect(localStorage.get('test')).toBeFalsy();
    expect(localStorage.get('data')).toStrictEqual(value);
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
