export class MaxLengthError extends Error {
  constructor(length: number) {
    super(`O campo deve possuir ao menos ${length} caracteres`);
    this.name = 'MaxLengthError';
  }
}
