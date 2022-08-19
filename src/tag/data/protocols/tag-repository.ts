import { Tag } from '@/tag/domain/entities';

export interface TagRepository {
  getAllTags: () => Promise<Tag[]>;
}
