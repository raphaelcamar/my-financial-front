import { isValid, parse } from 'date-fns';
import * as yup from 'yup';

const verifyDate = (value: string, originalValue: string): string => {
  const dateParse = parse(originalValue, 'dd/MM/yyyy', new Date());
  if (!isValid(dateParse)) return '';

  return originalValue;
};

const verifyValue = (value: string, originalValue: string): number => {
  const withoutpoints = originalValue.replace(/\D/g, '');
  if (withoutpoints.length <= 0) return null;

  return Number(withoutpoints);
};

export const CreateTransactionSchema = yup.object({
  topic: yup
    .string()
    .oneOf(['FOOD', 'TRANSPORT', 'HEALTH', 'SALARY', 'OTHER'], 'Deve informar algumas das opções')
    .required('Deve informar um tópico')
    .nullable(),

  cost: yup
    .number()
    .transform(verifyValue)
    .min(0, 'Caso negativo, coloque como despesa')
    .required('Deve informar um valor')
    .nullable(),

  billedAt: yup
    .string()
    .min(10, 'Informe uma data válida')
    .max(10, 'Informe uma data válida')
    .transform(verifyDate)
    .required('Deve informar uma data')
    .nullable(),

  type: yup.string().oneOf(['SPENT', 'ENTRANCE']).required('Deve informar um tipo').nullable(),

  anotation: yup.string().max(100).nullable().required('Deve informar uma anotação'),
});
