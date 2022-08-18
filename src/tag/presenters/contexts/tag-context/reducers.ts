/* eslint-disable default-param-last */
import { ActionTypes, InitialState, GET_ALL_TAGS } from './types';

export const initialState: InitialState = {
  tags: undefined,
};

// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
  }
}
