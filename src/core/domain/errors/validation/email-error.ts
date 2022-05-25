export class EmailError extends Error {
  constructor() {
    super('Email inválido');
    this.name = 'EmailError';
  }
}
