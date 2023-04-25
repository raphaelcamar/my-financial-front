import { RequestHttpRepository } from '@/core/infra';
import { MonthlyCloseRepository } from '@/transaction/data/protocols';

export class MonthlyClosingRepositoryData implements MonthlyCloseRepository {
  async verify(query: string, walletId: string): Promise<boolean> {
    const http = new RequestHttpRepository<unknown, { isClosed: boolean }>(
      `${process.env.BASE_URL}/v2/monthly-closing`
    );

    const httpResponse = await http.request({
      method: 'get',
      url: `verify${query}`,
      headers: {
        'wallet-id': walletId,
      },
    });

    return httpResponse.body.isClosed;
  }
}
