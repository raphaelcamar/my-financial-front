import { Tag, TagStatus } from '@/tag/domain/entities';

export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const CURRENT_VIEW_TAG = 'CURRENT_VIEW_TAG';

type GetAllTags = {
  type: typeof GET_ALL_TAGS;
  payload: Tag[];
};

type CurrentViewTag = {
  type: typeof CURRENT_VIEW_TAG;
  payload: TagStatus;
};

export type InitialState = {
  tags: Tag[];
  currentViewTag: TagStatus;
};

export type ActionTypes = GetAllTags | CurrentViewTag;
