import { monthStartDate } from '@/core/utils';
import { ActionType, InitialState, ReducerActions } from './types';
import { Transaction } from '@/transaction/domain';

const date = new Date();
const start = monthStartDate(new Date());
const limit = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const filter: Transaction.Filter = { limit, start };

export const initialState: InitialState = {
  transactions: [],
  filter,
  indicators: undefined,
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
    case ActionType.UPDATE_INDICATORS:
      return {
        ...state,
        indicators: action.payload,
      };
  }
};
