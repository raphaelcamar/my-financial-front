import { User } from '@/access-and-auth/domain';
import { ActionTypes, USER_AUTHORIZED, EMAIL_PASSWORD_RECOVER } from './types';

export function fetchUserAuth(payload: User): ActionTypes {
  return { type: USER_AUTHORIZED, payload };
}

export function fetchEmailPasswordRecover(payload: string): ActionTypes {
  return { type: EMAIL_PASSWORD_RECOVER, payload };
}
