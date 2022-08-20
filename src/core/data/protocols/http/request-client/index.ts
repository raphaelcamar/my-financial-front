import { AxiosRequestHeaders } from 'axios';
import { HttpResponse } from '..';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
  method?: 'get' | 'put' | 'post' | 'delete' | 'patch';
  headers?: AxiosRequestHeaders;
};

export interface HttpClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  get(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  put(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  delete(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  patch(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  request(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
