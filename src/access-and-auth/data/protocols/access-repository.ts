import { User } from '@/access-and-auth/domain';

export interface AccessRepository {
  login: (login: User.Login) => Promise<User.Data>;
  subscribe: (user: User.Subscribe) => Promise<User.Data>;
  verifyAccessToken: (tokenId: string) => Promise<User.Data>;
  sendRecoverPasswordEmail: (email: string) => Promise<void>;
  sendNewPasswordRecover: (password: string, email: string) => Promise<void>;
  sendCodePasswordRecover: (code: string, email: string) => Promise<void>;
}
