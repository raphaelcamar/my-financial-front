import { Tag, TagStatus } from '@/tag/domain/entities';
import { ActionTypes, GET_ALL_TAGS, CURRENT_VIEW_TAG } from './types';

export function fetchTags(payload: Tag[]): ActionTypes {
  return { type: GET_ALL_TAGS, payload };
}

export function fetchTagsByStatus(payload: TagStatus): ActionTypes {
  return { type: CURRENT_VIEW_TAG, payload };
}
