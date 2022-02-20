import { User, Login } from '@/access-and-auth/domain/';

export interface AccessRepository {
  login: (login: Login) => Promise<User>;
  // subscribe: (user: Partial<User>) => Promise<User>;
}
