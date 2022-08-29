import { AxiosRequestHeaders } from 'axios';
import { LocalStorageRepository } from '@/core/infra';

export const injectHeaders = (headers: AxiosRequestHeaders = {}): AxiosRequestHeaders => {
  const token = new LocalStorageRepository();

  return {
    Authorization: `Bearer ${token.get('@token')}`,
    'Access-Control-Allow-Origin': '*',
    ...headers,
  };
};
