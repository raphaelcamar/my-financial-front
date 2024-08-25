import * as yup from 'yup';

const verifyValue = (value: string, originalValue: string): number => {
  const withoutpoints = String(originalValue)?.replace(/\D/g, '');

  if (!withoutpoints || withoutpoints.length <= 0) return null;

  return Number(withoutpoints);
};

const today = new Date();
today.setHours(0, 0, 0, 0);

export const CreateMonthlyRecurrence = yup.object({
  paymentType: yup
    .string()
    .oneOf(
      ['CREDIT', 'DEBIT', 'MONEY', 'PIX', 'TRANSFER', 'CRYPTO', 'BANK_SLIP', 'OTHER'],
      'Deve informar algumas das opções'
    )
    .required('Deve informar forma de pagamento')
    .nullable(),

  value: yup
    .number()
    .transform(verifyValue)
    .min(0, 'Caso negativo, coloque como despesa')
    .required('Deve informar um valor')
    .nullable(),
  title: yup.string().required('Campo obrigatório').max(30, 'Máximo de 30 caracteres'),
  description: yup.string().required('Campo obrigatório').max(40, 'Máximo de 40 caracteres'),
  type: yup
    .string()
    .oneOf(['ENTRANCE', 'SPENT'], 'Deve informar algumas das opções')
    .required('Deve informar um tipo de recorrência')
    .nullable(),
  expirationDate: yup.date().min(today, 'A data não pode ser anterior ao dia de hoje'),
  dueDate: yup.number().required('Informe um dia de cobrança'),
  tags: yup.array().required('Campo obrigatório'),
});
