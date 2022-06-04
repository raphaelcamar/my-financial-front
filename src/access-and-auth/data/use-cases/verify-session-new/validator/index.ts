import { FieldValidation } from '@/core/data';
import { ValidationBuilder } from '@/core/validation';

export const loginSchemaValidator = (): FieldValidation[] => {
  const email = ValidationBuilder.field('email').email().required().build();
  const password = ValidationBuilder.field('password').required().build();

  return [...email, ...password];
};

export const subscribeSchemaValidator = (): FieldValidation[] => {
  const name = ValidationBuilder.field('name').required().build();
  const lastname = ValidationBuilder.field('lastname').required().build();
  const email = ValidationBuilder.field('email').email().required().build();
  const password = ValidationBuilder.field('password').required().build();

  return [...name, ...lastname, ...email, ...password];
};
