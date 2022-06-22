import {
  EmailValidation,
  RequiredFieldValidation,
  MaxLengthValidation,
  MinLengthValidation,
  NumberValidation,
} from '@/core/data';
import { ValidationBuilder } from '@/core/validation';

describe('Builder validation', () => {
  test('Should be able to make all signed validations', () => {
    const field = 'test';

    const validations = ValidationBuilder.field(field).email().maxLength(5).minLength(1).required().number().build();

    expect(validations).toEqual([
      new EmailValidation(field),
      new MaxLengthValidation(field, 5),
      new MinLengthValidation(field, 1),
      new RequiredFieldValidation(field),
      new NumberValidation(field),
    ]);
  });
});
