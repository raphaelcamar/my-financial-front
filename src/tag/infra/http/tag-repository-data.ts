import { RequestHttpRepository } from '@/core/infra';
import { TagRepository } from '@/tag/data';
import { Tag, TagStatus } from '@/tag/domain/entities';

export class TagRepositoryData implements TagRepository {
  async getAllTags(): Promise<Tag[]> {
    const http = new RequestHttpRepository<unknown, Tag[]>();

    const httpResponse = await http.request({
      method: 'get',
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

  async getByStatus(status: TagStatus): Promise<Tag[]> {
    const request = new RequestHttpRepository<unknown, Tag[]>();
    const httpResponse = await request.get({
      url: `tag/${status}`,
    });

    return httpResponse.body;
  }
}
