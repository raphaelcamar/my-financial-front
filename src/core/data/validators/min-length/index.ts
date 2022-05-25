import { FieldValidation } from '@/core/data';

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly length: number) {}

  validate(value: string): Error {
    return value.length <= this.length ? new Error() : null;
  }
}
