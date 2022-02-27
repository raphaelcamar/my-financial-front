import * as yup from 'yup';

export const UserSubscribeValidatorSchema = yup.object({
  email: yup.string().email('Deve ser um email válido').required('Deve informar um e-mail').nullable(),
  password: yup.string().required('Deve informar a senha').nullable(),
  tokenId: yup.string(),
});
