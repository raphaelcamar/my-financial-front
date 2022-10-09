import { delay } from './delay';

describe('DelayTest - Unit tests', () => {
  test('Should be able to receive a milliseconds timeout, and return a promise', () => {
    expect(delay(2000)).toHaveProperty('then');
    expect(delay(2000)).toHaveProperty('catch');
  });
});
