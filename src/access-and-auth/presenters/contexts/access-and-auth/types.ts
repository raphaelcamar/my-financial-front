import { User } from '@/access-and-auth/domain';

export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const TOKEN_PASSWORD_RECOVER = 'TOKEN_PASSWORD_RECOVER';

export type InitialState = {
  user: User;
  passwordToken: string;
};

type UserAuthorized = {
  type: typeof USER_AUTHORIZED;
  payload: User;
};

type TokenPasswordRecover = {
  type: typeof TOKEN_PASSWORD_RECOVER;
  payload: string;
};

export type ActionTypes = UserAuthorized | TokenPasswordRecover;
