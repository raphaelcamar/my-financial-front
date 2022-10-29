import { ColorProps } from '@/main/styled';

export type TagStatus = 'active' | 'inactive';

export class Tag {
  _id?: string;
  description: string;
  color: keyof ColorProps;
  title: string;
  inactivatedAt?: Date;
  createdAt?: Date;
  userId: string;

  constructor(data: Tag.Data) {
    this._id = data?._id;
    this.description = data.description;
    this.color = data.color as keyof ColorProps;
    this.title = data.title;
    this.inactivatedAt = data.inactivatedAt;
    this.createdAt = data?.createdAt;
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
    createdAt: Date;
  }
}
