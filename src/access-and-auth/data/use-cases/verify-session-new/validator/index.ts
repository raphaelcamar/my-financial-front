import { FieldValidation } from '@/core/data';
import { ValidationBuilder } from '@/core/validation';

export const loginSchemaValidator = (): FieldValidation[] => {
  const email = ValidationBuilder.field('email').email().required().build();
  const password = ValidationBuilder.field('password').required().build();

  return [...email, ...password];
};
