import { FieldValidation } from '@/core/data';
import { NumberError } from '@/core/domain/errors';

export class NumberValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string | number): Error {
    const transform = Number(value);
    if (Number.isNaN(transform)) throw new NumberError();

    return null;
  }
}
