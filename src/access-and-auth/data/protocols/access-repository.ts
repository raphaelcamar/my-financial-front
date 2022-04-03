import { User } from '@/access-and-auth/domain';

export interface AccessRepository {
  login: (login: User.Login) => Promise<User.Data>;
  subscribe: (user: User.Subscribe) => Promise<User.Data>;
}
