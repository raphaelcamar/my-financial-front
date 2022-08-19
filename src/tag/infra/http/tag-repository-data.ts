import { RequestHttpRepository } from '@/core/infra';
import { TagRepository } from '@/tag/data';
import { Tag } from '@/tag/domain/entities';

export class TagRepositoryData implements TagRepository {
  async getAllTags(): Promise<Tag[]> {
    const request = new RequestHttpRepository<unknown, Tag[]>();

    const httpResponse = await request.get({
      url: 'tag',
    });

    return httpResponse.body;
  }
}
