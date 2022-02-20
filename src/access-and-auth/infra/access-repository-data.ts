import { AccessRepository } from '@/access-and-auth/data/protocols/access-repository';
import { Login, User } from '@/access-and-auth/domain';
import { AxiosHttpClient } from '@/core/infra';

// Aqui faz a comunicação com o context
export class AccessRepositoryData implements AccessRepository {
  async login(login: Login): Promise<User> {
    const axios = new AxiosHttpClient<Login, User>();

    const httpResponse = await axios.post({ url: '', body: login });

    return httpResponse.body;
  }

  // subscribe(user: Partial<User>): Promise<User> {
  //   return null;
  // }
}
