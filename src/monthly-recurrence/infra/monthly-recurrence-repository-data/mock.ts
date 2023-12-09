import { MockedRequest, RestHandler, rest, DefaultRequestBody } from 'msw';
import { HttpSuccessStatusCode } from '@/core/data';
import { TagMockBuilder } from '@/monthly-recurrence/mocks';
import { MockContract } from '@/core/presenters/request-interceptor';

export class MonthlyRecurrenceDataHandlers implements MockContract<{ getTags: Promise<any> }> {
  private BASE_URL = `${process.env.BASE_URL}/v2`;
  private handlers = [];

  getHandlers(): RestHandler<MockedRequest<DefaultRequestBody>>[] {
    return [this.getTags()];
  }

  getTags(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(`${this.BASE_URL}/tag`, (req, res, ctx) =>
      res(
        ctx.status(HttpSuccessStatusCode.OK),
        ctx.json({ tags: new TagMockBuilder().getArray(30) }),
        ctx.delay(2000),
        ctx.set('Access-Control-Allow-Origin', '*')
      )
    );
  }
}
