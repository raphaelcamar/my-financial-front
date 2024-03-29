import { AccessRepository } from '@/user/data/protocols/access-repository';
import { User, Wallet } from '@/user/domain';
import { RequestHttpRepository } from '@/core/infra';

type BodyRequestToken = {
  token: string;
};

export class AccessRepositoryData implements AccessRepository {
  async login(bodyLogin: User.Login): Promise<User.Data> {
    const http = new RequestHttpRepository<User.Login, User.Data>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'post',
      url: 'user/login',
      body: bodyLogin,
    });
    return httpResponse.body;
  }

  async subscribe(bodyLogin: User.Subscribe): Promise<User.Data> {
    const http = new RequestHttpRepository<User.Subscribe, User.Data>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'post',
      url: 'user/create',
      body: bodyLogin,
    });

    return httpResponse.body;
  }

  async verifyAccessToken(tokenId: string): Promise<User.Data> {
    const http = new RequestHttpRepository<BodyRequestToken, User.Data>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'post',
      url: 'user/verify',
      body: {
        token: tokenId,
      },
    });

    return httpResponse.body;
  }

  async sendRecoverPasswordEmail(email: string): Promise<void> {
    const http = new RequestHttpRepository<Pick<User.Login, 'email'>, void>(process.env.BASE_URL);
    await http.request({
      method: 'post',
      url: 'user/password-recover',
      body: {
        email,
      },
    });
  }

  async sendNewPasswordRecover(password: string, email: string): Promise<void> {
    const http = new RequestHttpRepository<Pick<User, 'password' | 'email'>, void>(process.env.BASE_URL);

    await http.request({
      method: 'put',
      url: 'user/update',
      body: {
        email,
        password,
      },
    });
  }

  async sendCodePasswordRecover(code: string, email: string): Promise<void> {
    const http = new RequestHttpRepository<any, void>(process.env.BASE_URL);

    await http.request({
      method: 'post',
      url: 'user/verify-code',
      body: {
        email,
        code,
      },
    });
  }

  async changeCurrentWallet(newWallet: string): Promise<Wallet.Data> {
    const http = new RequestHttpRepository<any, { wallet: Wallet.Data }>(process.env.BASE_URL);

    const httpResponse = await http.request({
      method: 'post',
      url: 'wallet/change',
      body: {
        walletId: newWallet,
      },
    });
    return httpResponse.body.wallet;
  }
}
