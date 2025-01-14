import type { Pagination } from '@/core/domain';

export type TypeTransaction = 'ENTRANCE' | 'SPENT' | 'RECURRENT';

export type TypeTopic = 'FOOD' | 'TRANSPORT' | 'HEALTH' | 'OTHER' | 'SALARY' | 'LEISURE' | 'MONTHLY_RECURRENCE';

export type TypeStatus = 'FINISHED' | 'PENDING';

export type TypeCoin = 'USD' | 'BRL' | 'EUR' | 'ARS' | 'GBP' | 'JPY' | 'CNY' | 'AUD' | 'CAD' | 'CHF' | 'NZD';

export type PaymentType = 'CREDIT' | 'DEBIT' | 'MONEY' | 'PIX' | 'TRANSFER' | 'CRYPTO' | 'BANK_SLIP' | 'OTHER';

export class Transaction {
  _id?: string;
  userId: string;
  billedAt: Date;
  createdAt?: Date;
  anotation?: string;
  type: TypeTransaction;
  updatedAt?: Date;
  cost: number;
  total?: number;
  topic: TypeTopic;
  status: TypeStatus;
  walletId: string;
  coin?: TypeCoin;
  paymentType: PaymentType;

  constructor(transaction: Transaction.Data) {
    this._id = transaction._id;
    this.userId = transaction.userId;
    this.billedAt = new Date(transaction.billedAt);
    this.createdAt = new Date(transaction.createdAt);
    this.anotation = transaction.anotation;
    this.type = transaction.type;
    this.updatedAt = new Date(transaction.updatedAt);
    this.cost = transaction.cost;
    this.topic = transaction.topic;
    this.total = transaction.total;
    this.walletId = transaction.walletId;
    this.status = transaction.status;
    this.coin = transaction.coin;
    this.paymentType = transaction.paymentType;
  }
}

export namespace Transaction {
  export interface Data {
    _id?: string;
    userId: string;
    billedAt: string | Date;
    createdAt?: string | Date;
    anotation?: string;
    type: TypeTransaction;
    updatedAt?: string | Date;
    cost: number;
    topic: TypeTopic;
    total?: number;
    walletId: string;
    status: TypeStatus;
    coin?: TypeCoin;
    paymentType: PaymentType;
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
    walletId: string;
    status: TypeStatus;
    coin?: TypeCoin;
    paymentType: PaymentType;
  }

  export interface Filter {
    start?: Date | string;
    limit?: Date | string;
    pagination: Omit<Pagination<Transaction[], 'transactions'>, 'transactions'>;
  }

  export interface Statistic {
    mostSpent: {
      value: number;
      filter: Transaction.Filter;
      description: string;
    };
    averageSpent: {
      filter: Transaction.Filter;
      value: number;
    };
    total: number;
    totalFilter: {
      filter: Transaction.Filter;
      value: number;
    };
  }
}
