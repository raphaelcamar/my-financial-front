import { HttpResponse } from '..';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

export interface HttpClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
  get(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
