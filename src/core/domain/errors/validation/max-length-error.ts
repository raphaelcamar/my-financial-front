export class MaxLengthError extends Error {
  constructor(length: number) {
    super(`O campo deve ter ao menos ${length} caracteres`);
    this.name = 'MaxLengthError';
  }
}
