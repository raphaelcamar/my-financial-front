import * as yup from 'yup';

export const UserLoginValidatorSchema = yup.object({
  password: yup.string().required('Deve informar a senha').nullable(),
  email: yup.string().email('Deve ser um email válido').required('Deve informar um e-mail').nullable(),
});
