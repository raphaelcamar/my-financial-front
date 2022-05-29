import { FieldValidation } from '@/core/data';
import { RequiredFieldError } from '@/core/domain/errors';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return !value || value === '' ? new RequiredFieldError() : null;
  }
}
