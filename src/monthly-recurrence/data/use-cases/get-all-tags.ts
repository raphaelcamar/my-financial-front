import { TagRepository } from '@/monthly-recurrence/data/protocols';
import { Tag } from '@/monthly-recurrence/domain/entities';

export class GetAllTags {
  constructor(private tagRepository: TagRepository) {}

  async execute(): Promise<Tag[]> {
    const result = await this.tagRepository.getAllTags();
    return result;
  }
}
