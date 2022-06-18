import { User } from '@/access-and-auth/domain';
import { ActionTypes, USER_AUTHORIZED, TOKEN_PASSWORD_RECOVER } from './types';

export function fetchUserAuth(payload: User): ActionTypes {
  return { type: USER_AUTHORIZED, payload };
}

export function fetchTokenPasswordRecover(payload: string): ActionTypes {
  return { type: TOKEN_PASSWORD_RECOVER, payload };
}
