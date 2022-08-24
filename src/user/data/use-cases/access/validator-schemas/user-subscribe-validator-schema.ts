import * as yup from 'yup';

export const UserSubscribeValidatorSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Zà-úÀ-Ú\s]*$/, 'Deve ser um nome válido')
    .required('Nome é obrigatório')
    .nullable(),
  lastname: yup
    .string()
    .matches(/^[a-zA-Zà-úÀ-Ú\s]*$/, 'Deve ser um sobrenome válido')
    .required('Sobrenome é obrigatório')
    .nullable(),
  email: yup.string().email('Deve ser um email válido').required('Deve informar um e-mail').nullable(),
  password: yup.string().required('Deve informar a senha').nullable(),
});
