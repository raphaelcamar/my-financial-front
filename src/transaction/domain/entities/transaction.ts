export type TypeTransaction = 'ENTRANCE' | 'SPENT';

export type TypeTopic = 'FOOD' | 'TRANSPORT' | 'HEALTH' | 'OTHER';

export interface Transaction {
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
