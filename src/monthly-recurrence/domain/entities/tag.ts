import { ColorProps, Shade } from '@/main/styled';

export type TagStatus = 'active' | 'inactive';

export class Tag {
  public id?: string;
  public description: string;
  public color: keyof ColorProps;
  public title: string;
  public inactivatedAt?: Date;
  public userId: string;
  public shade: keyof Shade;

  constructor(data: Tag.Data) {
    this.id = data?._id;
    this.color = data.color as keyof ColorProps;
    this.description = data.description;
    this.inactivatedAt = data?.inactivatedAt;
    this.userId = data.userId;
    this.title = data.title;
    this.shade = data.shade as keyof Shade;
  }
}

export namespace Tag {
  export interface Data {
    _id?: string;
    description: string;
    color: string;
    title: string;
    inactivatedAt?: Date;
    userId: string;
    shade: string;
  }
}
