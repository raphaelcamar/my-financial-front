import * as yup from 'yup';

export const FilterTransactionSchema = yup.object({
  limit: yup.date().required('Informe a data'),
  start: yup.date().required('Informe a data'),
});
