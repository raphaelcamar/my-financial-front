export class ServerError extends Error {
  message = '';
  status = 0;
  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.status = statusCode;
  }
}
