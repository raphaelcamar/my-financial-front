import { User } from '@/access-and-auth/domain';

export enum ActionType {
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  EMAIL_PASSWORD_RECOVER = 'EMAIL_PASSWORD_RECOVER',
  USER_LOGOUT = 'USER_LOGOUT',
}

export type InitialState = {
  user: User;
  emailPasswordRecover: string;
};

type UserAuthorized = {
  type: ActionType.USER_AUTHORIZED;
  payload: User;
};

type UserLogout = {
  type: ActionType.USER_LOGOUT;
  payload: User;
};

type EmailPasswordRecover = {
  type: ActionType.EMAIL_PASSWORD_RECOVER;
  payload: string;
};

export type Action = UserAuthorized | EmailPasswordRecover | UserLogout;
