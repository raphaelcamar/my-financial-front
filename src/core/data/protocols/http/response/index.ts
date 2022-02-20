// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T> = {
  statusCode: number;
  body?: T;
};
