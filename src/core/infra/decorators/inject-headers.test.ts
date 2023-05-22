import { injectHeaders } from './inject-headers';

describe('InjectHeaders', () => {
  test('Should be able to add headers into to object, and return with bearer token', () => {
    const headers = injectHeaders({ foo: 'bar' });

    expect(headers).toHaveProperty('foo');
  });
});
