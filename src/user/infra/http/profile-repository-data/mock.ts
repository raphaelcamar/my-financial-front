import { rest } from 'msw';
import { HttpSuccessStatusCode } from '@/core/data';
import { ProfileMockBuilder } from '@/user/mocks/profile';

const BASE_URL = `${process.env.BASE_URL}/user/`;

export const ProfileRepositoryDataHandlers = [
  rest.post(`${BASE_URL}/login`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new ProfileMockBuilder().profilePicture), ctx.delay(1500))
  ),
  rest.post(`${BASE_URL}/subscribe`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new ProfileMockBuilder().profilePicture), ctx.delay(1500))
  ),
  rest.post(`${BASE_URL}/verifyAccessToken`, (req, res, ctx) =>
    res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(new ProfileMockBuilder().profilePicture), ctx.delay(1500))
  ),
];
