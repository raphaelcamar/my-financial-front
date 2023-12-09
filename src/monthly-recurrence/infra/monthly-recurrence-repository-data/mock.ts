import { MockedRequest, RestHandler, rest, DefaultRequestBody } from 'msw';
import { HttpSuccessStatusCode } from '@/core/data';
import { TagMockBuilder } from '@/monthly-recurrence/mocks';
import { MockContract } from '@/core/presenters/request-interceptor';
import { MonthlyRecurrenceMockBuilder } from '@/monthly-recurrence/mocks/monthly-recurrence';

export class MonthlyRecurrenceDataHandlers implements MockContract<{ getTags: Promise<any> }> {
  private BASE_URL = `${process.env.BASE_URL}/v2`;
  private handlers = [];

  getHandlers(): RestHandler<MockedRequest<DefaultRequestBody>>[] {
    return [this.getTags(), this.getMonthlyRecurrences()];
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

  getMonthlyRecurrences(): RestHandler<MockedRequest<DefaultRequestBody>> {
    return rest.get(`${this.BASE_URL}/monthly-recurrence`, (req, res, ctx) =>
      res(
        ctx.status(HttpSuccessStatusCode.OK),
        ctx.json(new MonthlyRecurrenceMockBuilder().getArray(25)),
        ctx.delay(2000),
        ctx.set('Access-Control-Allow-Origin', '*')
      )
    );
  }
}
