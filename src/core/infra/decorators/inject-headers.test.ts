import { injectHeaders } from './inject-headers';

describe('InjectHeaders', () => {
  test('Should be able to add headers into to object, and return with bearer token', () => {
    const headers = injectHeaders({ foo: 'bar' });

    expect(headers).toHaveProperty('foo');
  });

  test('Should be able to call injectHeaders, and have Authorization and allow headers', () => {
    const headers = injectHeaders();

    expect(headers).toHaveProperty('Authorization');
    expect(headers).toHaveProperty('Access-Control-Allow-Origin');
  });
});
