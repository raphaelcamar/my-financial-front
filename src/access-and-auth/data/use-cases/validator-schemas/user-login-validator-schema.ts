import * as yup from 'yup';
import { Login } from '@/access-and-auth/domain';

export const UserLoginValidatorSchema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('Deve informar um e-mail')
    .nullable(),
  password: yup.string().required('Deve informar a senha').nullable(),
  rememberMe: yup.boolean(),
  tokenId: yup.string(),
});
