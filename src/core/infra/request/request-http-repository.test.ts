import axios from 'axios';
import { HttpErrorStatusCode, HttpSuccessStatusCode } from '@/core/data';
import { mockBodyResponse, mockErrorBodyResponse, MockHttpResponse, mockHttpResponse } from '@/core/tests/mocks';
import { RequestHttpRepository } from './request-http-repository';
import { ExpiredSessionError, ServerError, UnexpectedError } from '@/core/domain/errors';
import 'jest-localstorage-mock';

jest.mock('axios');

type SutTypes = {
  sut: RequestHttpRepository<unknown, unknown>;
  mockedAxios: jest.Mocked<typeof axios>;
  status: HttpErrorStatusCode | HttpSuccessStatusCode;
  responseBody: MockHttpResponse;
};

type StatusCode = keyof typeof HttpErrorStatusCode | keyof typeof HttpSuccessStatusCode;

const makeSut = (statusCode?: StatusCode): SutTypes => {
  const sut = new RequestHttpRepository<unknown, unknown>();
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const response = mockHttpResponse();

  mockedAxios.request.mockClear().mockResolvedValue(response);

  const status = { ...HttpErrorStatusCode, ...HttpSuccessStatusCode };

  return {
    sut,
    mockedAxios,
    status: status[statusCode],
    responseBody: response,
  };
};

describe('RequestHttpRepository', () => {
  test('Should be able to call http request and return statusCode and body', async () => {
    const { sut, mockedAxios, responseBody } = makeSut();
    mockedAxios.get.mockResolvedValue({});

    const response = await sut.request({ method: 'get', url: '' });
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body', responseBody.data);
  });

  test('Should not be able to make API call and throw UnexpectedError', async () => {
    const { sut, mockedAxios } = makeSut();

    mockedAxios.request.mockRejectedValue({ message: 'error' });

    const promise = sut.request({
      url: '',
      method: 'post',
    });

    expect(promise).rejects.toThrowError(UnexpectedError);
  });

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

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
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

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 406 - NOT_ACCEPTABLE', async () => {
    const { sut, status } = makeSut('NOT_ACCEPTABLE');
    const message = 'Not acceptable';

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 415 - UNSUPPORTED_MEDIA_TYPE', async () => {
    const { sut, status } = makeSut('UNSUPPORTED_MEDIA_TYPE');
    const message = 'Unsuported type';

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 422 - UNPROCESSABLE_ENTITY', async () => {
    const { sut, status } = makeSut('UNPROCESSABLE_ENTITY');
    const message = 'Unsuported type';

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 400 - BAD_REQUEST', async () => {
    const { sut, status } = makeSut('BAD_REQUEST');
    const message = 'Unsuported type';

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should not be able to return body and throw error with statusCode 400 - BAD_REQUEST', async () => {
    const { sut, status } = makeSut('BAD_REQUEST');
    const message = 'Unsuported type';

    const response = mockErrorBodyResponse(message, status);

    try {
      sut.getResponseStatus(response);
    } catch (err) {
      expect(err).toBeInstanceOf(ServerError);
      expect(err).toHaveProperty('status', status);
      expect(err).toHaveProperty('message', response?.data?.message);
    }
  });

  test('Should be able to return body with status code 200 - OK', async () => {
    const { status, sut, responseBody } = makeSut('OK');

    const data = mockBodyResponse<typeof responseBody>(status, responseBody);

    const returnedValue = sut.getResponseStatus(data);

    expect(data).toHaveProperty('data', returnedValue.body);
    expect(data.status).toBe(HttpSuccessStatusCode.OK);
  });

  test('Should be able to return body with status code 201 - NO_CONTENT', async () => {
    const { status, sut, responseBody } = makeSut('NO_CONTENT');

    const data = mockBodyResponse<typeof responseBody>(status, responseBody);

    const returnedValue = sut.getResponseStatus(data);
    expect(returnedValue).not.toHaveProperty('data');
  });

  test('Should be able to return body with status code if status is different than error and 201, 200', async () => {
    const { sut, responseBody } = makeSut();
    const response = mockBodyResponse<typeof responseBody>(205, responseBody);

    const returnedValue = sut.getResponseStatus(response);

    expect(returnedValue).toHaveProperty('body', response?.data);
    expect(returnedValue).toHaveProperty('statusCode', response?.status);
  });
});
