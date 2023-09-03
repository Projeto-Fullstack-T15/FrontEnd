import { IUser } from "../../interfaces";

export interface IUserContextProps {
  user: IUser;
  createUser: (data: TCreateUser) => Promise<void>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  login: (data: ILogin) => Promise<void>;
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
  successModalOpen: boolean;
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
    birthday: Date;
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

export type TUpdateUser = Partial<TCreateUser>;

export interface ILogin {
  email: string;
  password: string;
}
