import * as yup from 'yup';
import { FieldValidation } from '@/core/data';
import { ValidationBuilder } from '@/core/validation';

export const RecoverPasswordValidator = yup.object({
  email: yup.string().email('Deve ser um E-mail válido').required('Informe o E-mail').nullable(),
});

export const CodeRecoverValidator = (): FieldValidation[] => {
  const code = ValidationBuilder.field('code').required().number().minLength(5).maxLength(6).build();

  return [...code];
};
