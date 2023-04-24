import { ActionType, Action, InitialState } from './types';

export const initialState: InitialState = {
  user: undefined,
  emailPasswordRecover: undefined,
  currentWallet: undefined,
  walletValue: 0,
};

export function reducer(state = initialState, action: Action): InitialState {
  switch (action.type) {
    case ActionType.USER_AUTHORIZED:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.EMAIL_PASSWORD_RECOVER:
      return {
        ...state,
        emailPasswordRecover: action.payload,
      };

    case ActionType.USER_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.CHANGE_WALLET:
      return {
        ...state,
        currentWallet: action.payload,
        walletValue: action.payload.value,
      };

    case ActionType.NEW_WALLET_VALUE:
      return {
        ...state,
        walletValue: action.payload,
      };
  }
}
