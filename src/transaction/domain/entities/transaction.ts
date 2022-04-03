export type TypeTransaction = 'ENTRANCE' | 'SPENT';

export type TypeTopic = 'FOOD' | 'TRANSPORT' | 'HEALTH' | 'OTHER';

export class Transaction {
  _id?: string;
  userId: string;
  billedAt: Date | string;
  createdAt?: Date | string;
  anotation?: string;
  type: TypeTransaction;
  updatedAt?: Date | string;
  cost: number;
  topic: TypeTopic;

  constructor(transaction: Transaction.Data) {
    this._id = transaction._id;
    this.userId = transaction.userId;
    this.billedAt = transaction.billedAt.toISOString();
    this.createdAt = transaction.billedAt.toISOString();
    this.anotation = transaction.anotation;
    this.type = transaction.type;
    this.updatedAt = transaction.updatedAt.toISOString();
    this.cost = transaction.cost;
    this.topic = transaction.topic;
  }
}

export namespace Transaction {
  export interface Data {
    _id?: string;
    userId: string;
    billedAt: Date;
    createdAt?: Date;
    anotation?: string;
    type: TypeTransaction;
    updatedAt?: Date;
    cost: number;
    topic: TypeTopic;
  }

  export interface Response {
    _id?: string;
    userId: string;
    billedAt: Date;
    createdAt?: Date;
    anotation?: string;
    type: TypeTransaction;
    updatedAt?: Date;
    value: number;
    topic: TypeTopic;
  }
}
