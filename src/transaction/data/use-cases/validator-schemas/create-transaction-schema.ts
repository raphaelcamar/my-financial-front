import * as yup from 'yup';

export const CreateTransactionSchema = yup.object({
  topic: yup
    .string()
    .oneOf(['FOOD', 'TRANSPORT', 'HEALTH', 'OTHER'], 'Deve informar algumas das opções')
    .required('Deve informar um tópico')
    .nullable(),

  value: yup.number().required('Deve informar um valor').nullable().min(0, 'Caso negativo, coloque como despesa'),
  billedAt: yup.date().required('Deve informar uma data').nullable(),
  type: yup.string().oneOf(['SPENT', 'ENTRANCE']).required('Deve informar um tipo').nullable(),
  anotation: yup.string().max(100).nullable(),
});
