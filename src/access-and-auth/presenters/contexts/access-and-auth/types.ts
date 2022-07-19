import { User } from '@/access-and-auth/domain';

export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const EMAIL_PASSWORD_RECOVER = 'EMAIL_PASSWORD_RECOVER';
export const USER_LOGOUT = 'USER_LOGOUT';

export type InitialState = {
  user: User;
  emailPasswordRecover: string;
};

type UserAuthorized = {
  type: typeof USER_AUTHORIZED;
  payload: User;
};

type UserLogout = {
  type: typeof USER_LOGOUT;
  payload: User;
};

type EmailPasswordRecover = {
  type: typeof EMAIL_PASSWORD_RECOVER;
  payload: string;
};

export type ActionTypes = UserAuthorized | EmailPasswordRecover | UserLogout;
