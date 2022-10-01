import { Tag, TagStatus } from '@/monthly-recurrence/domain/entities';

export interface TagRepository {
  create: (tag: Tag) => Promise<Tag>;
  getAllTags: () => Promise<Tag[]>;
  getByStatus: (status: TagStatus) => Promise<Tag[]>;
  modifyStatusTag: (status: TagStatus, tagId: string) => Promise<Tag>;
}
