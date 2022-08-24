export class UserNotLoggedError extends Error {
  constructor() {
    super('Usuário não logado');
    this.name = 'UserNotLoggedError';
  }
}
