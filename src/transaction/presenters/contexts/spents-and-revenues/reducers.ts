import { ActionType, InitialState, ReducerActions } from './types';

export const initialState: InitialState = {
  transactions: [],
  filter: undefined,
};

export const reducer = (state = initialState, action: ReducerActions): InitialState => {
  switch (action.type) {
    case ActionType.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionType.UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ActionType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
  }
};
