import { Tag } from '@/monthly-recurrence/domain';
import { TagRepository } from '../protocols';

export class DeleteTag {
  constructor(private tagRepository: TagRepository, private tagId: string, private tags: Tag[]) {}

  async execute() {
    await this.tagRepository.delete(this.tagId);

    const filteredTags = this.tags.filter(tag => tag._id !== this.tagId);

    return filteredTags;
  }
}
