export type PaymentType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'PIX' | 'BANCARY_TRANSFER' | 'OTHER';

export class MonthlyRecurrence {
  public id?: string;
  public startDate: Date;
  public endDate?: Date;
  public description?: string;
  public type: PaymentType;
  public name: string;
  public value: string;
  public inactivatedAt?: Date;
  public recurernceType: 'SIGNATURE' | string;
  public tagId?: string;

  constructor(data: MonthlyRecurrence.Data) {
    this.id = data?._id;
    this.startDate = data?.startDate ? new Date(data?.startDate) : null;
    this.endDate = data?.endDate ? new Date(data?.endDate) : null;
    this.description = data?.description;
    this.type = data?.type as PaymentType;
    this.name = data?.name;
    this.value = data?.value;
    this.inactivatedAt = data?.inactivatedAt ? new Date(data?.inactivatedAt) : null;
    this.recurernceType = data?.recurernceType;
    this.tagId = data?.tagId;
  }
}

export namespace MonthlyRecurrence {
  export interface Data {
    _id?: string;
    startDate: string;
    endDate: string;
    description?: string;
    type: string;
    name: string;
    value: string;
    inactivatedAt?: string;
    recurernceType: string;
    tagId?: string;
  }
}
