import axios, { AxiosResponse } from 'axios';
import { api } from '@/core/infra';
import {
  HttpClient,
  HttpErrorStatusCode,
  HttpPostParams,
  HttpResponse,
  HttpSuccessStatusCode,
} from '@/core/data/protocols';
import { injectHeaders } from '../decorators';
import { ExpiredSessionError, ServerError, UnexpectedError } from '@/core/domain/errors';

// TODO refactor this, with just one function
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

  async patch(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await api.patch(`/${params.url}`, params.body, {
      headers: injectHeaders(params?.headers),
    });

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  // eslint-disable-next-line consistent-return
  async request(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    let response: AxiosResponse;
    try {
      response = await axios.request({
        url: `${process.env.BASE_URL}/${params.url}`,
        method: params?.method,
        data: params?.body,
        headers: injectHeaders(params?.headers),
      });

      return {
        statusCode: response.status,
        body: response.data,
      };
    } catch (error) {
      response = error.response;

      if (!response) throw new UnexpectedError();
    }
    switch (response.status) {
      case HttpSuccessStatusCode.NO_CONTENT:
      case HttpSuccessStatusCode.OK:
        return {
          statusCode: response.status,
          body: response.data,
        };
      case HttpErrorStatusCode.BAD_REQUEST:
      case HttpErrorStatusCode.FORBIDDEN:
      case HttpErrorStatusCode.INTERNAL:
      case HttpErrorStatusCode.NOT_ACCEPTABLE:
      case HttpErrorStatusCode.NOT_FOUND:
      case HttpErrorStatusCode.UNAUTHORIZED:
        throw new ExpiredSessionError();

      case HttpErrorStatusCode.UNPROCESSABLE_ENTITY:
      case HttpErrorStatusCode.UNSUPPORTED_MEDIA_TYPE:
        throw new ServerError(response?.data?.message, response.status);
    }
  }
}
