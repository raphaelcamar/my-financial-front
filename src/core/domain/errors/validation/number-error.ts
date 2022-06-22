export class NumberError extends Error {
  constructor() {
    super('Apenas números');
    this.name = 'NumberError';
  }
}
