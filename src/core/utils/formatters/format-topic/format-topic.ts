import { TypeTopic } from '@/transaction/domain';

export const formatTopic = (topic: TypeTopic): string => {
  switch (topic) {
    case 'FOOD':
      return 'Comida';
    case 'HEALTH':
      return 'Saúde';
    case 'OTHER':
      return 'Outro';
    case 'TRANSPORT':
      return 'Transporte';
    case 'SALARY':
      return 'Salário';
    case 'LEISURE':
      return 'Lazer';
    default:
      return '-';
  }
};
