export class MinLengthError extends Error {
  constructor(length: number) {
    super(`O campo mais de ${length} caracteres`);
    this.name = 'MinLengthError';
  }
}
