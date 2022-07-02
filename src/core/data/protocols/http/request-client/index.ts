import { AxiosRequestHeaders } from 'axios';
import { HttpResponse } from '..';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
  headers?: AxiosRequestHeaders;
};

export interface HttpClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  get(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  put(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  delete(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
