import { Action, InitialState, ActionType } from './types';

export const initialState: InitialState = {
  avatarUrl: undefined,
};

export function reducer(state = initialState, action: Action): InitialState {
  switch (action.type) {
    case ActionType.CHANGE_AVATAR_URL:
      return {
        ...state,
        avatarUrl: action.payload,
      };
  }
}
