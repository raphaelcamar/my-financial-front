import { User } from '@/access-and-auth/domain';
import { ActionTypes, USER_AUTHORIZED, EMAIL_PASSWORD_RECOVER, USER_LOGOUT } from './types';

export function fetchUserAuth(payload: User): ActionTypes {
  return { type: USER_AUTHORIZED, payload };
}

export function fetchEmailPasswordRecover(payload: string): ActionTypes {
  return { type: EMAIL_PASSWORD_RECOVER, payload };
}

export function fetchLogout(payload: User): ActionTypes {
  return { type: USER_LOGOUT, payload };
}
