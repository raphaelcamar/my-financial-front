import { Indicator, Transaction } from '@/transaction/domain';

export type InitialState = {
  transactions: Transaction[];
  filter: Transaction.Filter;
  indicators: any;
};

export enum ActionType {
  UPDATE_FILTER = 'UPDATE_FILTER',
  CREATE_TRANSACTION = 'CREATE_TRANSACTION',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  UPDATE_INDICATORS = 'UPDATE_INDICATORS',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
}

export type GetTransactions = {
  type: ActionType.GET_TRANSACTIONS;
  payload: Transaction[];
};

export type UpdateFilter = {
  type: ActionType.UPDATE_FILTER;
  payload: Transaction.Filter;
};

export type DeleteTransaction = {
  type: ActionType.DELETE_TRANSACTION;
  payload: Transaction[];
};

export type UpdateIndicators = {
  type: ActionType.UPDATE_INDICATORS;
  payload: { spent: Indicator; entrance: Indicator };
};

export type CreateTransaction = {
  type: ActionType.CREATE_TRANSACTION;
  payload: Transaction;
};

export type ReducerActions = GetTransactions | UpdateFilter | DeleteTransaction | UpdateIndicators | CreateTransaction;
