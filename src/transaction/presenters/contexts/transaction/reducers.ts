/* eslint-disable default-param-last */
import { ActionTypes, CREATE_TRANSACTION, InitialState } from './types';

export const initialState: InitialState = {
  transactions: undefined,
};
// eslint-disable-next-line consistent-return
export function reducer(state = initialState, action: ActionTypes): InitialState {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
  }
}
