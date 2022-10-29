import { rest } from 'msw';
import { HttpSuccessStatusCode } from '@/core/data';
import { TagMockBuilder } from '@/monthly-recurrence/mocks';

const BASE_URL = `${process.env.BASE_URL}/tag`;

const TagRepositoryDataHandlers = [
  rest.get(`${BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new TagMockBuilder().getArray(20)), ctx.delay(1500))
  ),
  rest.get(`${BASE_URL}/status/:id`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new TagMockBuilder().getArray(20)), ctx.delay(1500))
  ),
  // rest.patch(`${BASE_URL}/type/:type/:id`, (req, res, ctx) =>
  //   res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new TagMockBuilder().getArray(20)), ctx.delay(1500))
  // ),
];

export default TagRepositoryDataHandlers;
