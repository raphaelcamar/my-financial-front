/* eslint-disable default-param-last */
import { ActionTypes, InitialState, USER_AUTHORIZED, TOKEN_PASSWORD_RECOVER } from './types';

export const initialState: InitialState = {
  user: undefined,
  passwordToken: undefined,
};

// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case USER_AUTHORIZED:
      return {
        ...state,
        user: action.payload,
      };

    case TOKEN_PASSWORD_RECOVER:
      return {
        ...state,
        passwordToken: action.payload,
      };
  }
}
