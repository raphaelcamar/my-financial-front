import { User } from '@/user/domain';
import { Action, InitialState, ActionType } from './types';

export const initialState: InitialState = {
  user: undefined,
};

// TODO fix this
export function reducer(state = initialState, action: Action): InitialState {
  switch (action.type) {
    case ActionType.CHANGE_AVATAR_URL:
      return {
        ...state,
        user: new User({ ...(state.user as unknown as User.Data), pictureUrl: action.payload }),
      };
  }
}
