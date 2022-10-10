import crypto from 'crypto';
import { randomId } from './random-id';

beforeEach(() => {
  Object.defineProperty(global.self, 'crypto', {
    value: {
      getRandomValues: arr => crypto.randomBytes(arr.length * 2),
    },
  });
});

describe('RandomId - Unit tests', () => {
  test('Should be able to geenrate a random ID with a least 30 characters', () => {
    expect(randomId()).toBeTruthy();
  });
});
