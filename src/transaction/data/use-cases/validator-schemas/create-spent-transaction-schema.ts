import * as yup from 'yup';
import { isValidDate, parseDate } from '@/core/utils';

const verifyValue = (value: string, originalValue: string): number => {
  const withoutpoints = String(originalValue)?.replace(/\D/g, '');

  if (!withoutpoints || withoutpoints.length <= 0) return null;

  return Number(withoutpoints);
};

const verifyDate = (value: string, originalValue: string): string => {
  const dateParse = parseDate(originalValue, 'dd/MM/yyyy');
  if (!isValidDate(dateParse)) return '';

  return originalValue;
};

export const CreateSpentTransactionSchema = yup.object({
  topic: yup
    .string()
    .oneOf(['HEALTH', 'TRANSPORT', 'FOOD', 'LEISURE', 'OTHER'], 'Deve informar algumas das opções')
    .required('Deve informar um tópico')
    .nullable(),

  paymentType: yup
    .string()
    .oneOf(
      ['CREDIT', 'DEBIT', 'MONEY', 'PIX', 'TRANSFER', 'CRYPTO', 'BANK_SLIP', 'OTHER'],
      'Deve informar algumas das opções'
    )
    .required('Deve informar um tipo de pagamento')
    .nullable(),

  cost: yup
    .number()
    .transform(verifyValue)
    .min(0, 'Caso negativo, coloque como despesa')
    .required('Deve informar um valor')
    .nullable(),

  // billedAt: yup
  //   .string()
  //   .min(10, 'Informe uma data válida')
  //   .max(10, 'Informe uma data válida')
  //   .transform(verifyDate)
  //   .required('Deve informar uma data')
  //   .nullable(),

  walletId: yup.string().required('Deve informar a carteira'),
  status: yup.string().oneOf(['FINISHED', 'PENDING']).required('Deve informar o status'),
  anotation: yup.string().required('Deve informar uma observação'),
});

export const CreateEntranceTransactionSchema = yup.object({
  topic: yup
    .string()
    .oneOf(['SALARY', 'OTHER'], 'Deve informar algumas das opções')
    .required('Deve informar um tópico')
    .nullable(),
  paymentType: yup
    .string()
    .oneOf(['MONEY', 'PIX', 'TRANSFER', 'OTHER'], 'Deve informar algumas das opções')
    .required('Deve informar um tipo de pagamento')
    .nullable(),

  cost: yup
    .number()
    .transform(verifyValue)
    .min(0, 'Caso negativo, coloque como despesa')
    .required('Deve informar um valor')
    .nullable(),

  walletId: yup.string().required('Deve informar a carteira'),
  status: yup.string().oneOf(['FINISHED', 'PENDING']).required('Deve informar o status'),
  anotation: yup.string().required('Deve informar uma observação'),
});
