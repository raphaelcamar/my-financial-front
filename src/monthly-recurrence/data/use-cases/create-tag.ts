import { TagRepository } from '@/monthly-recurrence/data/protocols';
import { Tag } from '@/monthly-recurrence/domain/entities';

export class CreateTag {
  constructor(private tagRepository: TagRepository, private tag: Tag) {}

  async execute() {
    const result = await this.tagRepository.create(this.tag);

    return result;
  }
}
