import { Tag, TagStatus } from '@/tag/domain/entities';
import { TagRepository } from '@/tag/data/protocols';

export class GetTagByStatus {
  constructor(private tagRepository: TagRepository, private viewTag: TagStatus) {}

  async execute(): Promise<Tag[]> {
    if (!this.viewTag) {
      const result = await this.tagRepository.getAllTags();
      return result;
    }

    const result = await this.tagRepository.getByStatus(this.viewTag);
    return result;
  }
}
