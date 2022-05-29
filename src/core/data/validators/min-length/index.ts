import { FieldValidation } from '@/core/data';

import { MinLengthError } from '@/core/domain/errors';

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly length: number) {}

  validate(value: string): Error {
    return value.length <= this.length ? new MinLengthError(this.length) : null;
  }
}
