import { TypeTransaction } from './transaction';

export class Indicator {
  public differenceValue: number;
  public phrase: string;
  public type: TypeTransaction;
  public percentage: number;
  public year: number;
  public month: number;
  public isAPositiveThing: boolean;

  constructor(data: Indicator.Server, type: TypeTransaction) {
    this.year = data.year;
    this.month = data.month;
    this.percentage = data.differencePercentage;
    this.type = type;
    this.isAPositiveThing = this.setIsApositiveThing(type, data.differencePercentage);
    this.differenceValue = data.value;
  }

  setIsApositiveThing(type: TypeTransaction, percentage: number): boolean {
    if (type === 'ENTRANCE') {
      if (percentage > 0) {
        return true;
      }
      return false;
    }

    if (type === 'SPENT') {
      if (percentage > 0) {
        return false;
      }

      return true;
    }

    return false;
  }
}

export namespace Indicator {
  export type Server = {
    differencePercentage: number;
    value: number;
    differenceValue: number;
    month: number;
    year: number;
  };
}
