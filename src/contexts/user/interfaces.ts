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
  phone: string;
  accountType: string;
}

export type TUpdateUser = Partial<TCreateUser>;

export interface ILogin {
  email: string;
  password: string;
}
