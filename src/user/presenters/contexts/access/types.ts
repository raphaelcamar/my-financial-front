import { User, Wallet } from '@/user/domain';

export enum ActionType {
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  EMAIL_PASSWORD_RECOVER = 'EMAIL_PASSWORD_RECOVER',
  USER_LOGOUT = 'USER_LOGOUT',
  CHANGE_WALLET = 'CHANGE_WALLET',
  NEW_WALLET_VALUE = 'NEW_WALLET_VALUE',
}

export type InitialState = {
  user: User;
  emailPasswordRecover: string;
  currentWallet: Wallet;
  walletValue: number;
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

type ChangeWallet = {
  type: ActionType.CHANGE_WALLET;
  payload: Wallet;
};

type UpdateWalletValue = {
  type: ActionType.NEW_WALLET_VALUE;
  payload: number;
};

export type Action = UserAuthorized | EmailPasswordRecover | UserLogout | ChangeWallet | UpdateWalletValue;
