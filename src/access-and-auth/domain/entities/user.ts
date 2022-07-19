export class User {
  _id?: string;
  name: string;
  lastname?: string;
  email: string;
  password: string;
  token: string;
  pictureUrl?: string;

  constructor(user: User.Data) {
    this._id = user._id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.password = user.password;
    this.token = user.token;
    this.pictureUrl = user?.pictureUrl;
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
    pictureUrl?: string;
  }

  export type Login = {
    rememberMe?: boolean;
  } & Pick<User, 'email' | 'password'>;

  export type Subscribe = Pick<User, 'email' | 'password' | 'lastname' | 'name'>;
}
