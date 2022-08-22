import { AxiosRequestHeaders } from 'axios';
import { HttpResponse } from '..';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
  method: 'get' | 'put' | 'post' | 'delete' | 'patch';
  headers?: AxiosRequestHeaders;
};

export interface HttpClient<T, R> {
  request(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
