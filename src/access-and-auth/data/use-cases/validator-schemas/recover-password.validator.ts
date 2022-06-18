import * as yup from 'yup';

export const RecoverPasswordValidator = yup.object({
  email: yup.string().email('Deve ser um E-mail válido').required('Informe o E-mail').nullable(),
});
