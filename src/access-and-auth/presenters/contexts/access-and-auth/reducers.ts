/* eslint-disable default-param-last */
import { ActionTypes, InitialState, USER_AUTHORIZED } from './types';

export const initialState: InitialState = {
  user: undefined,
};

// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case USER_AUTHORIZED:
      return {
        ...state,
        user: action.payload,
      };
  }
}
