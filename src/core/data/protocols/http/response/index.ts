// eslint-disable-next-line no-shadow
export enum HttpSuccessStatusCode {
  OK = 200,
  NO_CONTENT = 204,
}

export type HttpResponse<T> = {
  statusCode?: number;
  body?: T;
};

export enum HttpErrorStatusCode {
  INTERNAL = 500,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_ACCEPTABLE = 406,
  UNSUPPORTED_MEDIA_TYPE = 415,
  UNPROCESSABLE_ENTITY = 422,
  BAD_REQUEST = 400,
}
