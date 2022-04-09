export type TypeTransaction = 'ENTRANCE' | 'SPENT' | 'RECURRENT';

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
  total?: number;
  topic: TypeTopic;

  constructor(transaction: Transaction.Data) {
    this._id = transaction._id;
    this.userId = transaction.userId;
    this.billedAt = transaction.billedAt.toISOString();
    this.createdAt = transaction.createdAt.toISOString();
    this.anotation = transaction.anotation;
    this.type = transaction.type;
    this.updatedAt = transaction.updatedAt.toISOString();
    this.cost = transaction.cost;
    this.topic = transaction.topic;
    this.total = transaction.total;
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
    total: number;
  }

  export interface Response {
    _id?: string;
    userId: string;
    billedAt: string;
    createdAt?: string;
    anotation?: string;
    type: TypeTransaction;
    updatedAt?: string;
    value: number;
    topic: TypeTopic;
    amount: number;
  }
}
