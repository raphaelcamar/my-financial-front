import { User, UserLogin, UserSubscribe } from '@/access-and-auth/domain/';

export interface AccessRepository {
  login: (login: UserLogin) => Promise<User>;
  subscribe: (user: UserSubscribe) => Promise<User>;
}
