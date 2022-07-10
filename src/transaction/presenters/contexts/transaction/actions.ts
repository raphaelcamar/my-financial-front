import { Transaction } from '@/transaction/domain';
import {
  CREATE_TRANSACTION,
  ActionTypes,
  GET_TRANSACTIONS,
  FILTER_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
  STATISTIC_TRANSACTION,
} from './types';

export function fetchCreateTransaction(payload: Transaction[]): ActionTypes {
  return { type: CREATE_TRANSACTION, payload };
}

export function fetchGetTransactions(payload: Transaction[]): ActionTypes {
  return { type: GET_TRANSACTIONS, payload };
}

export function fetchFilterTransaction(payload: Transaction.Filter): ActionTypes {
  return { type: FILTER_TRANSACTION, payload };
}

export function fetchDeleteTransaction(payload: Transaction[]): ActionTypes {
  return { type: DELETE_TRANSACTION, payload };
}

export function fetchUpdateTransaction(payload: Transaction[]): ActionTypes {
  return { type: UPDATE_TRANSACTION, payload };
}

export function fetchGetStatistics(payload: Transaction.Statistic): ActionTypes {
  return { type: STATISTIC_TRANSACTION, payload };
}
