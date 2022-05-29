import { FieldValidation } from '@/core/data';

import { MaxLengthError } from '@/core/domain/errors';

export class MaxLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly length: number) {}

  validate(value: string): Error {
    return value.length > this.length ? new MaxLengthError(this.length) : null;
  }
}
