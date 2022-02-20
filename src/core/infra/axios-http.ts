import axios from 'axios';
import {
  HttpClient,
  HttpPostParams,
  HttpResponse,
} from '@/core/data/protocols';

export class AxiosHttpClient<T, R> implements HttpClient<T, R> {
  async get(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const httpResponse = await axios.post(params.url, params.body);

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
