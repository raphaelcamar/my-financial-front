import * as yup from 'yup';
import { isValidDate, parseDate } from '@/core/presenters/utils';

const verifyDate = (value: string, originalValue: string): string => {
  const dateParse = parseDate(originalValue, 'dd/MM/yyyy');
  if (!isValidDate(dateParse)) return '';

  return originalValue;
};

export const FilterTransactionSchema = yup.object({
  start: yup
    .string()
    .min(10, 'Informe uma data válida')
    .max(10, 'Informe uma data válida')
    .transform(verifyDate)
    .required('Deve informar uma data')
    .nullable(),
  limit: yup
    .string()
    .min(10, 'Informe uma data válida')
    .max(10, 'Informe uma data válida')
    .transform(verifyDate)
    .required('Deve informar uma data')
    .nullable(),
});
