import * as yup from 'yup';

// Transformar em um hook. Pois assim conseguimos usar o hook form dentro daqui, desacoplando do componente
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
