import { Transaction } from '@/transaction/domain';
import { CREATE_TRANSACTION, ActionTypes, GET_TRANSACTIONS, FILTER_TRANSACTION, DELETE_TRANSACTION } from './types';

export function fetchCreateTransaction(payload: Transaction[]): ActionTypes {
  return { type: CREATE_TRANSACTION, payload };
}

export function fetchGetTransactions(payload: Transaction[]): ActionTypes {
  return { type: GET_TRANSACTIONS, payload };
}

export function fetchFilterTransaction(payload: Transaction.Filter): ActionTypes {
  return { type: FILTER_TRANSACTION, payload };
}

export function fetchDeleteTransaction(payload: string): ActionTypes {
  return { type: DELETE_TRANSACTION, payload };
}
