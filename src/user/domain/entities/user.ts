import { Wallet } from './wallet';

export class User {
  _id?: string;
  birthDate?: Date;
  email: string;
  lastname?: string;
  name: string;
  password?: string;
  pictureUrl?: string;
  profession?: string;
  salary?: number;
  token: string;
  wallets?: Wallet[];

  constructor(user: User.Data) {
    this._id = user._id;
    this.birthDate = user?.birthDate ? new Date(user?.birthDate) : null;
    this.lastname = user.lastname;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.pictureUrl = user?.pictureUrl;
    this.profession = user?.profession;
    this.salary = user?.salary;
    this.token = user.token;
    this.wallets = user.wallets;
  }

  getNameAndLastName(): string {
    return `${this.name} ${this.lastname}`;
  }

  getFieldOrEmpty(field: keyof User.Data): any {
    if (!field) return '-';

    if (!this?.[field]) return '-';

    return this[field].toString();
  }
}

export namespace User {
  export interface Data {
    _id?: string;
    birthDate?: string | Date;
    email: string;
    lastname?: string;
    name: string;
    password?: string;
    pictureUrl?: string;
    profession?: string;
    salary?: number;
    token: string;
    wallets: Wallet[];
  }

  export type Login = {
    rememberMe?: boolean;
  } & Pick<User, 'email' | 'password'>;

  export type Subscribe = Pick<User, 'email' | 'password' | 'lastname' | 'name'>;
}
