import * as yup from 'yup';

export const CreateTagValidator = yup.object({
  title: yup.string().required('Informe o título').nullable(),
  description: yup.string().required('Informe a descrição').nullable(),
});
