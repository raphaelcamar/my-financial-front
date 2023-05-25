import { DefaultRequestBody, MockedRequest, RestHandler, rest } from 'msw';
import { UserMockBuilder } from '@/user/mocks/user';
import { HttpSuccessStatusCode } from '@/core/data';
import { AccessRepository } from '@/user/data';
import { MockContract } from '@/core/presenters/request-interceptor';

export class AccessRepositoryDataHandlers implements MockContract<AccessRepository> {
  BASE_URL = `${process.env.BASE_URL}/user`;

  getHandlers(): RestHandler<MockedRequest<DefaultRequestBody>>[] {
    return [this.login(), this.subscribe(), this.verifyAccessToken()];
  }

  login(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.post(`${this.BASE_URL}/login`, (req, res, ctx) =>
      res(
        ctx.status(HttpSuccessStatusCode.OK),
        ctx.json(new UserMockBuilder().user),
        ctx.delay(2000),
        ctx.set('Access-Control-Allow-Origin', '*')
      )
    );
  }

  subscribe(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.post(`${this.BASE_URL}/subscribe`, (req, res, ctx) =>
      res(
        ctx.status(HttpSuccessStatusCode.OK),
        ctx.json(new UserMockBuilder().user),
        ctx.delay(2000),
        ctx.set('Access-Control-Allow-Origin', '*')
      )
    );
  }

  verifyAccessToken(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.post(`${this.BASE_URL}/verify`, (req, res, ctx) =>
      res(
        ctx.status(HttpSuccessStatusCode.OK),
        ctx.json(new UserMockBuilder().user),
        ctx.delay(2000),
        ctx.set('Access-Control-Allow-Origin', '*')
      )
    );
  }

  // TODO
  sendRecoverPasswordEmail: (email: string) => RestHandler<MockedRequest<DefaultRequestBody>>;
  sendNewPasswordRecover: (password: string, email: string) => RestHandler<MockedRequest<DefaultRequestBody>>;
  sendCodePasswordRecover: (code: string, email: string) => RestHandler<MockedRequest<DefaultRequestBody>>;
}

export default AccessRepositoryDataHandlers;
