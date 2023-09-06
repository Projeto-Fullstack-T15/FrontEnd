export interface IUserResponse {
  id: number;
  email: string;
  phone: string;
  account_type: string;
  created_at: Date;
  last_updated_at: Date;
  address: IAddress;
  user: IUser;
}

export interface IAddress {
  id: number;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  account_id: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface IUser {
  id: number;
  name: string;
  cpf: string;
  birthday: Date;
  description: string;
  account_id: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IToken {
  token: string
}

export interface ITokenDecode {
  foo: string;
  exp: number;
  iat: number;
}

export interface IStyledModalProps {
  $width: string;
  $height: string;
}

export interface DeleteCommentProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
