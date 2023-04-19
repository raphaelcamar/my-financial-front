import { Transaction } from '@/transaction/domain';
import { ActionType, ReducerActions } from './types';

export const fetchGetTransactions = (payload: Transaction[]): ReducerActions => ({
  type: ActionType.GET_TRANSACTIONS,
  payload,
});

export const fetchFilterTransaction = (payload: Transaction.Filter): ReducerActions => ({
  type: ActionType.UPDATE_FILTER,
  payload,
});

export const fetchDeleteTransaction = (payload: Transaction[]): ReducerActions => ({
  type: ActionType.DELETE_TRANSACTION,
  payload,
});
