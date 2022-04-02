import { api } from '@/core/infra';
import { HttpClient, HttpPostParams, HttpResponse } from '@/core/data/protocols';

export class AxiosHttpClient<T, R> implements HttpClient<T, R> {
  async get(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.get(params.url, {
      data: params.body,
      headers: params.headers,
    });
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.post(`/${params.url}`, params.body, {
      headers: params.headers,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
