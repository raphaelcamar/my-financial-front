import { RequestHttpRepository } from '@/core/infra';
import { MonthlyCloseRepository } from '@/transaction/data/protocols';

export class MonthlyClosingRepositoryData implements MonthlyCloseRepository {
  async verify(query: string, walletId: string): Promise<boolean> {
    const http = new RequestHttpRepository<unknown, { closed: boolean }>(`${process.env.BASE_URL}/v2/monthly-closing`);

    const httpResponse = await http.request({
      method: 'get',
      url: `verify${query}`,
      headers: {
        'wallet-id': walletId,
      },
    });
    return httpResponse.body.closed;
  }

  async closeMonth(month: number, year: number, walletId: string): Promise<void> {
    const http = new RequestHttpRepository(`${process.env.BASE_URL}/v2`);

    await http.request({
      method: 'post',
      url: `monthly-closing`,
      body: {
        year,
        monthToClose: month,
      },
      headers: {
        'wallet-id': walletId,
      },
    });
  }
}
