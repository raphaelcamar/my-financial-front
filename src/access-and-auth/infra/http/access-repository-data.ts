import { AccessRepository } from '@/access-and-auth/data/protocols/access-repository';
import { User } from '@/access-and-auth/domain';
import { RequestHttpRepository } from '@/core/infra';

export class AccessRepositoryData implements AccessRepository {
  async login(bodyLogin: User.Login): Promise<User> {
    const request = new RequestHttpRepository<User.Login, User>();

    const httpResponse = await request.post({
      url: 'user/login',
      body: bodyLogin,
    });

    return httpResponse.body;
  }

  async subscribe(bodyLogin: User.Subscribe): Promise<User> {
    const request = new RequestHttpRepository<User.Subscribe, User>();

    const httpResponse = await request.post({
      url: 'user/create',
      body: bodyLogin,
    });

    return httpResponse.body;
  }
}
