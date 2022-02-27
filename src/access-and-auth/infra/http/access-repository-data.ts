import { AccessRepository } from '@/access-and-auth/data/protocols/access-repository';
import { UserLogin, User, UserSubscribe } from '@/access-and-auth/domain';
import { AxiosHttpClient } from '@/core/infra';

export class AccessRepositoryData implements AccessRepository {
  async login(bodyLogin: UserLogin): Promise<User> {
    const request = new AxiosHttpClient<UserLogin, User>();

    const httpResponse = await request.post({
      url: 'user/login',
      body: bodyLogin,
    });

    return httpResponse.body;
  }

  async subscribe(bodyLogin: UserSubscribe): Promise<User> {
    const request = new AxiosHttpClient<UserSubscribe, User>();

    const httpResponse = await request.post({
      url: 'user/create',
      body: bodyLogin,
    });

    return httpResponse.body;
  }
}
