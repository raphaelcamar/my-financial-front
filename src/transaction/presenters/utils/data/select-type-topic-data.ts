import { TypeTopic } from '@/transaction/domain';

type transactionTopicItem = {
  text: string;
  value: TypeTopic;
};

export const spentItems: transactionTopicItem[] = [
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

export const entranceItems: transactionTopicItem[] = [
  {
    text: 'Salário',
    value: 'SALARY',
  },
  {
    text: 'Outro',
    value: 'OTHER',
  },
];
