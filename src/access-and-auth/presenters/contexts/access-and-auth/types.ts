import { User } from '@/access-and-auth/domain';

export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const EMAIL_PASSWORD_RECOVER = 'EMAIL_PASSWORD_RECOVER';

export type InitialState = {
  user: User;
  emailPasswordRecover: string;
};

type UserAuthorized = {
  type: typeof USER_AUTHORIZED;
  payload: User;
};

type EmailPasswordRecover = {
  type: typeof EMAIL_PASSWORD_RECOVER;
  payload: string;
};

export type ActionTypes = UserAuthorized | EmailPasswordRecover;
