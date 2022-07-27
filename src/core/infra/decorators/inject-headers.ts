import { AxiosRequestHeaders } from 'axios';
import { LocalStorageRepository } from '@/core/infra';

export const injectHeaders = (headers: AxiosRequestHeaders): AxiosRequestHeaders => {
  const token = new LocalStorageRepository();

  if (headers) return headers;
  return {
    Authorization: `Bearer ${token.get('@token')}`,
  };
};
