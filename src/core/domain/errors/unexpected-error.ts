export class UnexpectedError extends Error {
  constructor() {
    super('Aconteceu alguma coisa. Tente novamente mais tarde.');
    this.name = 'UnexpectedError';
  }
}
