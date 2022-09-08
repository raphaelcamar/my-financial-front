import { Tag } from '@/tag/domain/entities';
import { TagRepository } from '../protocols';

export class DeleteTag {
  constructor(private tagId: string, private tagRepository: TagRepository, private tags: Tag[]) {}

  async execute(): Promise<Tag[]> {
    await this.tagRepository.delete(this.tagId);
    const filtered = this.tags.filter(tag => tag._id !== this.tagId);

    return filtered;
  }
}
