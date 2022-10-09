import { RequestHttpRepository } from '@/core/infra';
import { TagRepository } from '@/monthly-recurrence/data';
import { Tag, TagStatus } from '@/monthly-recurrence/domain/entities';

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
    const http = new RequestHttpRepository<unknown, Tag>();

    const httpResponse = await http.request({
      method: 'patch',
      url: `tag/type/${status}/${tagId}`,
    });

    return httpResponse.body;
  }

  async getByStatus(status: TagStatus): Promise<Tag[]> {
    const http = new RequestHttpRepository<unknown, Tag[]>();

    const httpResponse = await http.request({
      method: 'get',
      url: `tag/${status}`,
    });

    return httpResponse.body;
  }

  async create(tag: Tag): Promise<Tag> {
    const http = new RequestHttpRepository<Tag, Tag>();

    const httpResponse = await http.request({
      method: 'post',
      url: 'tag',
      body: tag,
    });

    return httpResponse.body;
  }

  async delete(tagId: string): Promise<Tag> {
    const http = new RequestHttpRepository<string, Tag>();

    const httpResponse = await http.request({
      method: 'delete',
      url: `tag/${tagId}`,
    });

    return httpResponse.body;
  }
}