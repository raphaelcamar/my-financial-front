import { Tag } from '@/tag/domain/entities';
import { ActionTypes, GET_ALL_TAGS } from './types';

export function fetchTags(payload: Tag[]): ActionTypes {
  return { type: GET_ALL_TAGS, payload };
}
