export interface User {
  _id?: string;
  name: string;
  lastname?: string;
  email: string;
  password: string;
  token: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserSubscribe = Pick<User, 'email' | 'password' | 'lastname' | 'name'>;
