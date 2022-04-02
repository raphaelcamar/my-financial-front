import { Transaction } from '@/transaction/domain/entities';
import { CREATE_TRANSACTION, ActionTypes } from './types';

export function fetchCreateTransaction(payload: Transaction): ActionTypes {
  return { type: CREATE_TRANSACTION, payload };
}
