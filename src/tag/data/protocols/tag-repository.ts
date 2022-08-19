import { Tag, TagStatus } from '@/tag/domain/entities';

export interface TagRepository {
  getAllTags: () => Promise<Tag[]>;
  modifyStatusTag: (status: TagStatus, tagId: string) => Promise<Tag>;
  getByStatus: (status: TagStatus) => Promise<Tag[]>;
}
