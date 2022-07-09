import { SelectType } from '@/core/domain';
import { TypeTransaction } from '@/transaction/domain';

export const typeItems: SelectType<TypeTransaction>[] = [
  {
    text: 'Entrada',
    value: 'ENTRANCE',
  },

  {
    text: 'Saída',
    value: 'SPENT',
  },
];
