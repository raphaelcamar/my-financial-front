import { api, LocalStorageRepository } from '@/core/infra';
import { HttpClient, HttpPostParams, HttpResponse } from '@/core/data/protocols';

export class RequestHttpRepository<T, R> implements HttpClient<T, R> {
  private token = new LocalStorageRepository();

  async get(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.get(params.url, {
      data: params.body,
      headers: !params.headers
        ? {
            Authorization: `Bearer ${this.token.get('@token')}`,
          }
        : params.headers,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.post(`/${params.url}`, params.body, {
      headers: !params.headers
        ? {
            Authorization: `Bearer ${this.token.get('@token')}`,
          }
        : params.headers,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async put(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.put(`/${params.url}`, params.body, {
      headers: !params.headers
        ? {
            Authorization: `Bearer ${this.token.get('@token')}`,
          }
        : params.headers,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async delete(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.delete(`/${params.url}`, {
      headers: !params.headers
        ? {
            Authorization: `Bearer ${this.token.get('@token')}`,
          }
        : params.headers,
      data: params.body,
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
