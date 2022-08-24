export enum ActionType {
  CHANGE_AVATAR_URL = 'CHANGE_AVATAR_URL',
}

export type InitialState = {
  avatarUrl: string;
};

export type ChangeAvatar = {
  type: ActionType.CHANGE_AVATAR_URL;
  payload: string;
};

export type Action = ChangeAvatar;
