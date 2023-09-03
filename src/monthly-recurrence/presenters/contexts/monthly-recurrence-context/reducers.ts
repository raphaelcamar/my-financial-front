import { ReducerActions, InitialState, ActionType } from './types';

export const initialState: InitialState = {
  monthlyRecurences: undefined,
  tags: undefined,
};

export function reducer(state = initialState, action: ReducerActions): InitialState {
  switch (action.type) {
    case ActionType.GET_MONTHLY_RECURRENCES:
      return {
        ...state,
        monthlyRecurences: action.payload,
      };

    case ActionType.GET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
  }
}
