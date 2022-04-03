import { Transaction } from '@/transaction/domain';

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';

export type InitialState = {
  transactions: Transaction[];
};

type CreateTransaction = {
  type: typeof CREATE_TRANSACTION;
  payload: Transaction;
};

export type ActionTypes = CreateTransaction;
