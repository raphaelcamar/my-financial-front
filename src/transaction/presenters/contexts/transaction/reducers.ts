/* eslint-disable default-param-last */
import {
  ActionTypes,
  CREATE_TRANSACTION,
  GET_TRANSACTIONS,
  FILTER_TRANSACTION,
  InitialState,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
} from './types';

export const initialState: InitialState = {
  transactions: [],
  filter: undefined,
};
// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case FILTER_TRANSACTION:
      return {
        ...state,
        filter: action.payload,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };

    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
  }
}
