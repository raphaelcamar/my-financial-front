import { faker } from '@faker-js/faker';
import { AxiosResponse } from 'axios';

export type MockHttpResponse = {
  data: Record<string, any>;
  status: number;
};

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

export const mockHttpResponse = (): any => ({
  data: JSON.parse(faker.datatype.json()),
  status: faker.helpers.arrayElement([200, 201]),
});
