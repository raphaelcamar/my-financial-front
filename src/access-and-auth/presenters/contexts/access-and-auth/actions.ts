import { User } from '@/access-and-auth/domain/entities';
import { ActionTypes, USER_AUTHORIZED } from './types';

export function fetchUserAuth(payload: User): ActionTypes {
  return { type: USER_AUTHORIZED, payload };
}
