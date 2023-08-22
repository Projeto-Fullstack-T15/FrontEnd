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

export type TCreateUser = Omit<IUser, 'id' | 'announcements'>;

export type TUpdateUser = Partial<TCreateUser>;

export interface ILogin {
  email: string;
  password: string;
}
