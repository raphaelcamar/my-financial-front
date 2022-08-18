import { Tag } from '@/tag/domain/entities';

export const GET_ALL_TAGS = 'GET_ALL_TAGS';

type GetAllTags = {
  type: typeof GET_ALL_TAGS;
  payload: Tag[];
};

export type InitialState = {
  tags: Tag[];
};

export type ActionTypes = GetAllTags;
