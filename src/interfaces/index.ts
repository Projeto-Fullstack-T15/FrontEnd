import Announcement from '../contexts/announces/interface';

export interface IUser {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: Date;
  description: string;
  announcementes: Announcement;
}

export interface ITokenDecode {
  foo: string;
  exp: number;
  iat: number;
}
