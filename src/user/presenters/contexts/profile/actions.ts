import { Action, ActionType } from './types';

export function fetchNewUserProfile(payload: string): Action {
  return { type: ActionType.CHANGE_AVATAR_URL, payload };
}
