export class User {
  _id?: string;

  name: string;

  lastname?: string;

  email: string;

  password: string;

  token: string;

  constructor(user: User.Data) {
    this._id = user._id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.password = user.password;
    this.token = user.token;
  }
}

export namespace User {
  export interface Data {
    _id?: string;
    name: string;
    lastname?: string;
    email: string;
    password: string;
    token: string;
  }

  export type Login = Pick<User, 'email' | 'password'>;

  export type Subscribe = Pick<User, 'email' | 'password' | 'lastname' | 'name'>;
}
