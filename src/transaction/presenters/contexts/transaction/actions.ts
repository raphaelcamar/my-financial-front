import { Transaction } from '@/transaction/domain';
import { CREATE_TRANSACTION, ActionTypes, GET_TRANSACTIONS } from './types';

export function fetchCreateTransaction(payload: Transaction): ActionTypes {
  return { type: CREATE_TRANSACTION, payload };
}

export function fetchGetTransactions(payload: Transaction[]): ActionTypes {
  return { type: GET_TRANSACTIONS, payload };
}
