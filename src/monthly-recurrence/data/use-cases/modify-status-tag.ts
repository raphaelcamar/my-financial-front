import { TagRepository } from '@/monthly-recurrence/data/protocols';
import { Tag, TagStatus } from '@/monthly-recurrence/domain/entities';

export class ModifyStatusTag {
  constructor(
    private tagRepository: TagRepository,
    private status: TagStatus,
    private tagId: string,
    private tagList: Tag[]
  ) {}

  // TODO verify the ideia to handle the active / inactive state into the current card
  async execute(): Promise<Tag[]> {
    const modifiedTag = await this.tagRepository.modifyStatusTag(this.status, this.tagId);

    const index = this.tagList.findIndex(tag => tag._id === this.tagId);

    this.tagList[index] = modifiedTag;

    const modifiedList = this.tagList.map(tag => (tag?._id === this.tagId ? modifiedTag : tag));

    return modifiedList;
  }
}
