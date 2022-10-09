import { SelectType } from '@/core/domain';
import { TypeTopic } from '@/transaction/domain';

export const spentItems: SelectType<TypeTopic>[] = [
  {
    text: 'Alimentação',
    value: 'FOOD',
  },
  {
    text: 'Transporte',
    value: 'TRANSPORT',
  },
  {
    text: 'Saúde',
    value: 'HEALTH',
  },
  {
    text: 'Outro',
    value: 'OTHER',
  },
];

export const entranceItems: SelectType<TypeTopic>[] = [
  {
    text: 'Salário',
    value: 'SALARY',
  },
  {
    text: 'Outro',
    value: 'OTHER',
  },
];
