import { IUser } from '../../interfaces';

export interface IUserContextProps {
  user: IUser;
  createUser: (data: TCreateUser) => Promise<void>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  login: (data: ILogin) => Promise<void>;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface TCreateUser {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  accountType: string;
  user: {
    name: string;
    cpf: string;
    birthday: string;
    description: string;
  };
  address: {
    zipCode: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}

export type TUpdateUser = Partial<TCreateUser>;

export interface ILogin {
  email: string;
  password: string;
}
