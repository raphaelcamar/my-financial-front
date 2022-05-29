/* eslint-disable no-restricted-syntax */
import { FieldValidation, Validation } from '@/core/data';

export class ValidationComposite implements Validation {
  constructor(private readonly validators: FieldValidation[]) {}

  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter(v => v.field === fieldName);

    for (const validator of validators) {
      const error = validator.validate(fieldValue);
      if (error) return error.message;
    }

    return null;
  }

  validFields(field: FieldValidation, fieldValue: string): string | null {
    const error = field.validate(fieldValue);

    return error ? error.message : null;
  }
}
