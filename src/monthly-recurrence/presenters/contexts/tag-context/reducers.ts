import { ActionTypes, InitialState, GET_ALL_TAGS, CURRENT_VIEW_TAG } from './types';

export const initialState: InitialState = {
  tags: undefined,
  currentViewTag: null,
};

export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    case CURRENT_VIEW_TAG:
      return {
        ...state,
        currentViewTag: action.payload,
      };
  }
}
