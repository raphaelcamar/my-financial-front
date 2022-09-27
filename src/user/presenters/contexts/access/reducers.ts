import { ActionType, Action, InitialState } from './types';

export const initialState: InitialState = {
  user: undefined,
  emailPasswordRecover: undefined,
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
  }
}