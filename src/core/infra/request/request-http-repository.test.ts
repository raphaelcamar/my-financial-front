import axios from 'axios';
import { HttpErrorStatusCode, HttpSuccessStatusCode } from '@/core/data';
import { mockBodyResponse, mockErrorBodyResponse } from '@/core/tests/mocks';
import { RequestHttpRepository } from './request-http-repository';
import { ExpiredSessionError, ServerError, UnexpectedError } from '@/core/domain/errors';

jest.mock('axios');

type sutTypes = {
  sut: RequestHttpRepository<unknown, unknown>;
  mockedAxios: jest.Mocked<typeof axios>;
  status: HttpErrorStatusCode | HttpSuccessStatusCode;
};

type StatusCode = keyof typeof HttpErrorStatusCode | keyof typeof HttpSuccessStatusCode;

const makeSut = (statusCode?: StatusCode): sutTypes => {
  const sut = new RequestHttpRepository<unknown, unknown>();
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const status = { ...HttpErrorStatusCode, ...HttpSuccessStatusCode };

  return {
    sut,
    mockedAxios,
    status: status[statusCode],
  };
};

type MockResponseData = {
  foo: string;
};

describe('RequestHttpRepository', () => {
  test('Should be able to call http request and return statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.get.mockResolvedValue({});

    const response = await sut.request({ method: 'get', url: '' });

    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });

  // test('Should not be able to make API call and throw UnexpectedError', async () => {
  //   const { sut } = makeSut();
  //   const mockedAxios = axios as jest.Mocked<typeof axios>;
  //   mockedAxios.post.mockRejectedValue({ message: 'error' });
  //   try {
  //     const r = await sut.request({
  //       url: '',
  //       method: 'post',
  //     });
  //     console.log({ r });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  test('Should not be able to return body and throw error with statusCode 500 - INTERNAL', async () => {
    const { sut, status } = makeSut('INTERNAL');
    const message = 'Internal Server Error';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 404 - NOT_FOUND', async () => {
    const { sut, status } = makeSut('NOT_FOUND');
    const message = 'Not found Error';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 401 - UNAUTHORIZED', async () => {
    const { sut, status } = makeSut('UNAUTHORIZED');

    const data = mockErrorBodyResponse('', status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ExpiredSessionError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', err?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 403 - FORBIDDEN', async () => {
    const { sut, status } = makeSut('FORBIDDEN');
    const message = 'Not found error';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 406 - NOT_ACCEPTABLE', async () => {
    const { sut, status } = makeSut('NOT_ACCEPTABLE');
    const message = 'Not acceptable';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 415 - UNSUPPORTED_MEDIA_TYPE', async () => {
    const { sut, status } = makeSut('UNSUPPORTED_MEDIA_TYPE');
    const message = 'Unsuported type';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 422 - UNPROCESSABLE_ENTITY', async () => {
    const { sut, status } = makeSut('UNPROCESSABLE_ENTITY');
    const message = 'Unsuported type';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 400 - BAD_REQUEST', async () => {
    const { sut, status } = makeSut('BAD_REQUEST');
    const message = 'Unsuported type';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 400 - BAD_REQUEST', async () => {
    const { sut, status } = makeSut('BAD_REQUEST');
    const message = 'Unsuported type';

    const data = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(data);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', data?.data?.message);
    }
  });

  test('Should be able to return body with status code 200 - OK', async () => {
    const { status } = makeSut('OK');

    const value = { foo: 'bar' };

    const data = mockBodyResponse<MockResponseData>(status, value);

    expect(data).toHaveProperty('data', value);
    expect(data.status).toBe(HttpSuccessStatusCode.OK);
  });

  test('Should be able to return body with status code 201 - NO_CONTENT', async () => {
    const { status } = makeSut('NO_CONTENT');

    const value = { foo: 'bar' };

    const data = mockBodyResponse<MockResponseData>(status, value);

    expect(data).toHaveProperty('data', value);
    expect(data.status).toBe(HttpSuccessStatusCode.NO_CONTENT);
  });
});
