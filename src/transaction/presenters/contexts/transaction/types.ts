import { Transaction } from '@/transaction/domain';

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const FILTER_TRANSACTION = 'FILTER_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export type InitialState = {
  transactions: Transaction[];
  filter: Transaction.Filter;
};

type CreateTransaction = {
  type: typeof CREATE_TRANSACTION;
  payload: Transaction[];
};
type FilterTransaction = {
  type: typeof FILTER_TRANSACTION;
  payload: Transaction.Filter;
};

type GetTransaction = {
  type: typeof GET_TRANSACTIONS;
  payload: Transaction[];
};

type DeleteTransaction = {
  type: typeof DELETE_TRANSACTION;
  payload: string;
};

export type ActionTypes = CreateTransaction | GetTransaction | FilterTransaction | DeleteTransaction;
