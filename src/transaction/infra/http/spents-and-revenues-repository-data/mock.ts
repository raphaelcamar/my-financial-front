import { DefaultRequestBody, MockedRequest, RestHandler, rest } from 'msw';
import { SpentsAndRevenuesRepository } from '@/transaction/data';
import { MockContract } from '@/core/presenters/request-interceptor';
import { HttpSuccessStatusCode } from '@/core/data';
import { SpentsAndRevenuesIndicatorsBuilder, TransactionBuilder } from '@/transaction/mocks';

export class SpentsAndRevenuesDataHandlers implements MockContract<SpentsAndRevenuesRepository> {
  private BASE_URL = `${process.env.BASE_URL}/v2/transaction`;
  private handlers = [];

  getHandlers(): RestHandler<MockedRequest<DefaultRequestBody>>[] {
    return [this.getTransactions(), this.create(), this.getIndicators()];
  }

  getTransactions(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(this.BASE_URL, (req, res, ctx) =>
      res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(TransactionBuilder.getArray(20)), ctx.delay(2000))
    );
  }

  delete(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.delete(`${this.BASE_URL}/:id`, (req, res, ctx) =>
      res(ctx.status(HttpSuccessStatusCode.OK), ctx.json({}), ctx.delay(2000))
    );
  }

  getIndicators(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(`${this.BASE_URL}/indicators`, (req, res, ctx) =>
      res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(SpentsAndRevenuesIndicatorsBuilder.build()), ctx.delay(2000))
    );
  }

  create(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(this.BASE_URL, (req, res, ctx) =>
      res(ctx.status(HttpSuccessStatusCode.OK), ctx.json(TransactionBuilder.build()), ctx.delay(2000))
    );
  }
}
