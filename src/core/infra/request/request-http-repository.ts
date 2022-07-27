import { api } from '@/core/infra';
import { HttpClient, HttpPostParams, HttpResponse } from '@/core/data/protocols';
import { injectHeaders } from '../decorators';

export class RequestHttpRepository<T, R> implements HttpClient<T, R> {
  async get(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.get(params.url, {
      data: params.body,
      headers: injectHeaders(params.headers),
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.post(`/${params.url}`, params.body, {
      headers: injectHeaders(params?.headers),
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async put(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.put(`/${params.url}`, params.body, {
      headers: injectHeaders(params?.headers),
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async delete(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.delete(`/${params.url}`, {
      headers: injectHeaders(params?.headers),
      data: params.body,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
