export class ExpiredSessionError extends Error {
  status = 401;
  constructor() {
    super();
    this.name = 'ExpiredSessionError';
    this.message = 'Sessão expirada. Você será redirecionado para o login';
  }
}
