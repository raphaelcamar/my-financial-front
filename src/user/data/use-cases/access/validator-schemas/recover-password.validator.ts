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

export const RecoverPasswordSendPassword = yup.object({
  password: yup.string().min(6, 'Deve possuir ao menos 6 caracteres').required('Informe a nova senha'),
  confirm_password: yup
    .string()
    .min(6, 'Deve possuir ao menos 6 caracteres')
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem')
    .required('Informe a nova senha'),
});
