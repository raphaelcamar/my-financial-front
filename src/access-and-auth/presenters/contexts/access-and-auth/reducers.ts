/* eslint-disable default-param-last */
import { ActionTypes, InitialState, USER_AUTHORIZED, EMAIL_PASSWORD_RECOVER, USER_LOGOUT } from './types';

export const initialState: InitialState = {
  user: undefined,
  emailPasswordRecover: undefined,
};

// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case USER_AUTHORIZED:
      return {
        ...state,
        user: action.payload,
      };

    case EMAIL_PASSWORD_RECOVER:
      return {
        ...state,
        emailPasswordRecover: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
  }
}
