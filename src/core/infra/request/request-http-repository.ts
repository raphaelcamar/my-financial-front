import axios, { AxiosResponse } from 'axios';
import { api, LocalStorageRepository } from '@/core/infra';
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
      case HttpErrorStatusCode.UNAUTHORIZED:
        this.clearSession();
        throw new ExpiredSessionError();

      case HttpSuccessStatusCode.OK:
        return {
          statusCode: response.status,
          body: response.data,
        };
      case HttpSuccessStatusCode.NO_CONTENT:
      case HttpErrorStatusCode.BAD_REQUEST:
      case HttpErrorStatusCode.FORBIDDEN:
      case HttpErrorStatusCode.INTERNAL:
      case HttpErrorStatusCode.NOT_ACCEPTABLE:
      case HttpErrorStatusCode.NOT_FOUND:
      case HttpErrorStatusCode.UNPROCESSABLE_ENTITY:
      case HttpErrorStatusCode.UNSUPPORTED_MEDIA_TYPE:
        throw new ServerError(response?.data?.message, response.status);
    }
  }

  private clearSession() {
    const queryString = window.location.href;

    const a = new LocalStorageRepository();
    const params = new URL(queryString);
    const { pathname } = params;

    a.clearAll();
    window.location.href = `/login?redirect=expiredToken&page=${pathname}`;
  }
}
