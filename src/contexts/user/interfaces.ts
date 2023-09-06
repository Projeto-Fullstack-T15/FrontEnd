import { DeepPartial } from 'react-hook-form';
import { IResetPassword, ISendEmail, IUserResponse } from '../../interfaces';

export interface IUserContextProps {
  user: IUserResponse;
  getUser: () => Promise<void>;
  createUser: (data: TCreateUser) => Promise<void>;
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

export interface TCreateUser {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  account_type: string;
  user: {
    name: string;
    cpf: string;
    birthday: Date | string;
    description: string;
  };
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}

export type TUpdateUser = DeepPartial<TCreateUser>;

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IJwtDecode {
  foo: string;
  exp: number;
  iat: number;
}
