import TagRepositoryDataHandlers from '@/monthly-recurrence/infra/tag-repository-data/mock';
import TransactionRepositoryDataHandlers from '@/transaction/infra/http/transaction-repository-data/mock';
import AccessRepositoryDataHandlers from '@/user/infra/http/access-repository-data/mock';

export const handlers = [
  ...AccessRepositoryDataHandlers,
  ...TransactionRepositoryDataHandlers,
  ...TagRepositoryDataHandlers,
];
