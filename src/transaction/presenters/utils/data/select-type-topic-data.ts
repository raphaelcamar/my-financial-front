import { TypeTopic } from '@/transaction/domain/entities';

type transactionTopicItem = {
  text: string;
  value: TypeTopic;
};

export const items: transactionTopicItem[] = [
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
