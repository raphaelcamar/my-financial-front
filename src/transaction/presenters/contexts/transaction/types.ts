import { Transaction } from '@/transaction/domain';

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export type InitialState = {
  transactions: Transaction[];
};

type CreateTransaction = {
  type: typeof CREATE_TRANSACTION;
  payload: Transaction;
};

type GetTransaction = {
  type: typeof GET_TRANSACTIONS;
  payload: Transaction[];
};

export type ActionTypes = CreateTransaction | GetTransaction;
