import { RestHandler, MockedRequest, DefaultRequestBody, rest } from 'msw';
import { faker } from '@faker-js/faker';
import { MockContract } from '@/core/presenters/request-interceptor';
import { MonthlyCloseRepository } from '@/transaction/data';
import { HttpSuccessStatusCode } from '@/core/data';

export class MonthlyClosingDataHandlers implements MockContract<MonthlyCloseRepository> {
  private BASE_URL = `${process.env.BASE_URL}/v2/monthly-closing`;

  getHandlers(): RestHandler<MockedRequest<DefaultRequestBody>>[] {
    return [this.verify()];
  }

  verify(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(`${this.BASE_URL}/verify`, (req, res, ctx) =>
      res(ctx.status(HttpSuccessStatusCode.OK), ctx.json({ isClosed: faker.datatype.boolean() }), ctx.delay(2000))
    );
  }
}
