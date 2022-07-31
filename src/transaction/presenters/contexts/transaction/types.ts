import { Transaction } from '@/transaction/domain';

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const FILTER_TRANSACTION = 'FILTER_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const STATISTIC_TRANSACTION = 'STATISTIC_TRANSACTION';

export type InitialState = {
  transactions: Transaction[];
  filter: Transaction.Filter;
  statistic: Transaction.Statistic;
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
  payload: Transaction[];
};

type UpdateTransaction = {
  type: typeof UPDATE_TRANSACTION;
  payload: Transaction[];
};

type GetStatisticsTransaction = {
  type: typeof STATISTIC_TRANSACTION;
  payload: Transaction.Statistic;
};

export type ActionTypes =
  | CreateTransaction
  | GetTransaction
  | FilterTransaction
  | DeleteTransaction
  | UpdateTransaction
  | GetStatisticsTransaction;
