import { AccessRepository } from '@/access-and-auth/data/protocols/access-repository';
import { Login, User } from '@/access-and-auth/domain';
import { AxiosHttpClient } from '@/core/infra';

export class AccessRepositoryData implements AccessRepository {
  async login(bodyLogin: Login): Promise<User> {
    const request = new AxiosHttpClient<Login, User>();

    const httpResponse = await request.post({
      url: 'user/login',
      body: bodyLogin,
    });

    return httpResponse.body;
  }
}
