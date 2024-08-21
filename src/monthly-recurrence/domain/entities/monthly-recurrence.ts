import { Tag } from './tag';

export type MonthlyRecurrencePaymentType = 'CREDIT' | 'DEBIT' | 'BANK_SLIP' | 'OTHER';
export type TransactionType = 'ENTRANCE' | 'SPENT';

export class MonthlyRecurrence {
  public title: string;
  public id: string;
  public description: string;
  public tags: Tag[];
  public value: number;
  public expirationDate: Date;
  public userId: string;
  public dueDate: number;
  public paymentType: MonthlyRecurrencePaymentType;
  public walletId: string;
  public inactivatedAt?: Date;
  public type: TransactionType;

  constructor(data: MonthlyRecurrence.Data) {
    this.description = data.description;
    this.dueDate = data.dueDate;
    this.expirationDate = data?.expirationDate ? new Date(data.expirationDate) : null;
    this.id = data._id;
    this.inactivatedAt = data?.inactivatedAt ? new Date(data?.inactivatedAt) : null;
    this.paymentType = data.paymentType;
    this.tags = data.tags.map(tag => new Tag(tag));
    this.title = data.title;
    this.userId = data.userId;
    this.value = data.value;
    this.walletId = data.walletId;
    this.type = data.type;
  }
}

export namespace MonthlyRecurrence {
  export interface Data {
    title: string;
    _id: string;
    description: string;
    tags: Tag.Data[];
    value: number;
    expirationDate: Date;
    userId: string;
    dueDate: number;
    paymentType: MonthlyRecurrencePaymentType;
    walletId: string;
    inactivatedAt?: Date;
    type?: TransactionType;
  }
}
