import { TagRepository } from '@/tag/data/protocols';
import { Tag } from '@/tag/domain/entities';

export class GetAllTags {
  constructor(private tagRepository: TagRepository) {}

  async execute(): Promise<Tag[]> {
    const result = this.tagRepository.getAllTags();
    return result;
  }
}
