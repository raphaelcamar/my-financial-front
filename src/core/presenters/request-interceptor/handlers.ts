/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import { DefaultRequestBody, MockedRequest, RestHandler } from 'msw';
import TagRepositoryDataHandlers from '@/monthly-recurrence/infra/tag-repository-data/mock';
import AccessRepositoryDataHandlers from '@/user/infra/http/access-repository-data/mock';
import { SpentsAndRevenuesDataHandlers } from '@/transaction/infra/http/spents-and-revenues-repository-data/mock';
import { MonthlyClosingDataHandlers } from '@/transaction/infra/http/monthly-closing-repository-data/mock';

export type BaseType = {
  getHandlers: () => RestHandler<MockedRequest<DefaultRequestBody>>[];
};

export type MockContract<T> = BaseType & {
  // @ts-ignore
  [K in keyof T]: (...args: Parameters<T[K]>) =>
  RestHandler<MockedRequest<DefaultRequestBody>>;
};

export const handlers = [
  ...new AccessRepositoryDataHandlers().getHandlers(),
  ...TagRepositoryDataHandlers,
  ...new SpentsAndRevenuesDataHandlers().getHandlers(),
  ...new MonthlyClosingDataHandlers().getHandlers()
];
