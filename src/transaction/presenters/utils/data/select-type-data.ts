import { TypeTransaction } from '@/transaction/domain';

type transactionTypeItem = {
  text: string;
  value: TypeTransaction;
};

export const typeItems: transactionTypeItem[] = [
  {
    text: 'Entrada',
    value: 'ENTRANCE',
  },

  {
    text: 'Saída',
    value: 'SPENT',
  },
];
