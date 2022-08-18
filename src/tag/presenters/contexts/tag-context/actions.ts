import { Tag } from '@/tag/domain/entities';
import { ActionTypes, GET_ALL_TAGS } from './types';

export function getAllTags(payload: Tag[]): ActionTypes {
  return { type: GET_ALL_TAGS, payload };
}
