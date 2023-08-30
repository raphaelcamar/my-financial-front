import { rest } from 'msw';
import { HttpSuccessStatusCode } from '@/core/data';
import { TransactionBuilder, StatisticsMockBuilder } from '@/transaction/mocks';

const BASE_URL = `${process.env.BASE_URL}/transaction`;

const TransactionRepositoryDataHandlers = [
  rest.post(`${BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(TransactionBuilder.build()), ctx.delay(1500))
  ),

  rest.get(`${BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(TransactionBuilder.getArray(30)), ctx.delay(1500))
  ),

  rest.delete(`${BASE_URL}/:id`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.NO_CONTENT), ctx.json(TransactionBuilder.getArray(20)), ctx.delay(1500))
  ),

  rest.put(`${BASE_URL}/update`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(TransactionBuilder.getArray(20)), ctx.delay(1500))
  ),

  rest.get(`${BASE_URL}/statistics`, (req, res, ctx) => {
    const start = req.url.searchParams.get('start');
    const limit = req.url.searchParams.get('limit');
    return res(
      ctx.status(HttpSuccessStatusCode.OK),
      ctx.json(new StatisticsMockBuilder({ start, limit }).statistics),
      ctx.delay(1500)
    );
  }),
];

export default TransactionRepositoryDataHandlers;
