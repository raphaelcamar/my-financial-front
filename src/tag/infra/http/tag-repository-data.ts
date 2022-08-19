import { RequestHttpRepository } from '@/core/infra';
import { TagRepository } from '@/tag/data';
import { Tag, TagStatus } from '@/tag/domain/entities';

export class TagRepositoryData implements TagRepository {
  async getAllTags(): Promise<Tag[]> {
    const request = new RequestHttpRepository<unknown, Tag[]>();

    const httpResponse = await request.get({
      url: 'tag',
    });

    return httpResponse.body;
  }

  async modifyStatusTag(status: TagStatus, tagId: string): Promise<Tag> {
    const request = new RequestHttpRepository<unknown, Tag>();
    const httpResponse = await request.patch({
      url: `tag/type/${status}/${tagId}`,
    });

    return httpResponse.body;
  }
}
