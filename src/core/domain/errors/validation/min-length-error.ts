export class MinLengthError extends Error {
  constructor(length: number) {
    super(`O campo deve possuir mais de ${length} caracteres`);
    this.name = 'MinLengthError';
  }
}
