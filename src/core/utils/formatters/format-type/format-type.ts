import { TypeTransaction } from '@/transaction/domain';

export const formatType = (topic: TypeTransaction): string => {
  switch (topic) {
    case 'ENTRANCE':
      return 'Entrada';
    case 'SPENT':
      return 'Saída';
    case 'RECURRENT':
      return 'Recorrente';
    default:
      return '-';
  }
};
