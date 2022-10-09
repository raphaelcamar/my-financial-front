import { AxiosResponse } from 'axios';

export const mockBodyResponse = <T>(statusCode: number, body: T): AxiosResponse<T> => ({
  config: {},
  data: body,
  status: statusCode,
  headers: {},
  statusText: '',
});

export const mockErrorBodyResponse = (message: string, statusCode: number): AxiosResponse<{ message: string }> => ({
  config: {},
  data: {
    message,
  },
  status: statusCode,
  headers: {},
  statusText: '',
});
