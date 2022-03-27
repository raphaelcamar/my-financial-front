import { User } from '@/access-and-auth/domain/entities';

export const USER_AUTHORIZED = 'USER_AUTHORIZED';

export type InitialState = {
  user: User;
};

type UserAuthorized = {
  type: typeof USER_AUTHORIZED;
  payload: User;
};

export type ActionTypes = UserAuthorized;
