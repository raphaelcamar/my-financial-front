import axios, { AxiosResponse } from 'axios';
import { LocalStorageRepository } from '@/core/infra';
import {
  HttpClient,
  HttpErrorStatusCode,
  HttpPostParams,
  HttpResponse,
  HttpSuccessStatusCode,
} from '@/core/data/protocols';
import { injectHeaders } from '../decorators';
import { ExpiredSessionError, ServerError, UnexpectedError } from '@/core/domain/errors';

export class RequestHttpRepository<T, R> implements HttpClient<T, R> {
  BASE_URL: string;

  constructor(private baseUrl?: string) {
    this.BASE_URL = baseUrl;
  }

  // eslint-disable-next-line consistent-return
  async request(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    let response: AxiosResponse;
    try {
      response = await axios.request({
        url: `${this.BASE_URL}/${params.url}`,
        method: params?.method,
        data: params?.body,
        params: params.urlParams,
        headers: injectHeaders(params?.headers),
      });
      return {
        statusCode: response?.status,
        body: response?.data,
      };
    } catch (error) {
      response = error.response;

      if (!response) throw new UnexpectedError();
    }

    this.getResponseStatus(response);
  }

  // eslint-disable-next-line consistent-return
  getResponseStatus(response: AxiosResponse): HttpResponse<R> {
    switch (response.status) {
      case HttpErrorStatusCode.UNAUTHORIZED:
        this.clearSession();
        throw new ExpiredSessionError();

      case HttpSuccessStatusCode.NO_CONTENT:
        return {};
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
      case HttpErrorStatusCode.UNPROCESSABLE_ENTITY:
      case HttpErrorStatusCode.UNSUPPORTED_MEDIA_TYPE:
        throw new ServerError(response?.data?.message, response.status);
    }

    return {
      body: response.data,
      statusCode: response.status,
    };
  }

  clearSession() {
    const queryString = window.location.href;

    const localStorageRepository = new LocalStorageRepository();
    const params = new URL(queryString);
    const { pathname } = params;

    localStorageRepository.clearAll();
    window.location.href = `/login?redirect=expiredToken&page=${pathname}`;
  }
}
