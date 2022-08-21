import { TagRepository } from '@/tag/data/protocols';
import { Tag } from '@/tag/domain/entities';

export class CreateTag {
  constructor(private tagRepository: TagRepository, private tag: Tag) {}

  async execute() {
    const result = await this.tagRepository.create(this.tag);

    return result;
  }
}
