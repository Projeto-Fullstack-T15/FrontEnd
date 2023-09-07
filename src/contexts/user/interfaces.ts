import { DeepPartial } from 'react-hook-form';
import { IResetPassword, ISendEmail, IUserResponse } from '../../interfaces';

export interface IUserContextProps {
  user: IUserResponse;
  getUser: () => Promise<void>;
  createUser: (data: ICreateUser) => Promise<void>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  login: (data: ILogin) => Promise<void>;
  userLogout: () => void;
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
  successModalOpen: boolean;
  sendEmail: (sendEmailResetPassword: ISendEmail) => void;
  resetPassword: (resetPassword: IResetPassword, token: string) => void;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ICreateUser {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  account_type: 'BUYER' | 'ANNOUNCER';
  user: {
    name: string;
    cpf: string;
    birthday: Date;
    description: string;
  };
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  };
}

export type TUpdateUser = DeepPartial<ICreateUser>;

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface Account {
  id: number;
  email: string;
  phone: string;
  account_type: 'BUYER' | 'ANNOUNCER';
  created_at: string;
  last_updated_at: string;
}

export interface User {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
  description: string;
  account_id: number;
  created_at: string;
  last_updated_at: string;
}

export interface AccountWithUser extends Account {
  user: User;
}
