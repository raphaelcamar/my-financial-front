import { rest } from 'msw';
import { UserMockBuilder } from '@/user/mocks/user';
import { HttpSuccessStatusCode } from '@/core/data';

const BASE_URL = `${process.env.BASE_URL}/user/`;

export const AccessRepositoryDataHandlers = [
  rest.post(`${BASE_URL}/login`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new UserMockBuilder().user), ctx.delay(1500))
  ),
  rest.post(`${BASE_URL}/subscribe`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new UserMockBuilder().user), ctx.delay(1500))
  ),
  rest.post(`${BASE_URL}/verifyAccessToken`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new UserMockBuilder().user), ctx.delay(1500))
  ),
];
