import { User, Wallet } from '@/user/domain';
import { Action, ActionType } from './types';

export function fetchLogin(payload: User): Action {
  return { type: ActionType.USER_AUTHORIZED, payload };
}

export function fetchEmailPasswordRecover(payload: string): Action {
  return { type: ActionType.EMAIL_PASSWORD_RECOVER, payload };
}

export function fetchLogout(payload: User): Action {
  return { type: ActionType.USER_LOGOUT, payload };
}

export function fetchWallet(payload: Wallet): Action {
  return {
    type: ActionType.CHANGE_WALLET,
    payload,
  };
}
