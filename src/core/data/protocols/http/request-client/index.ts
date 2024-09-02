import { AxiosRequestHeaders } from 'axios';
import { HttpResponse } from '..';

export type Methods = 'get' | 'put' | 'post' | 'delete' | 'patch';
export type HttpPostParams<T> = {
  url: string;
  body?: T;
  method: Methods;
  headers?: AxiosRequestHeaders;
  urlParams?: object;
};

export interface HttpClient<T, R> {
  request(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
