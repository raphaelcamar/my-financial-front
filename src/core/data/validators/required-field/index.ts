import { FieldValidation } from '@/core/data';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return !value || value === '' ? new Error() : null;
  }
}
