import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ILogin,
  IUserContextProps,
  TCreateUser,
  TUpdateUser,
} from './interfaces';
import { api } from '../../services/api';
import { ITokenDecode, IUser } from '../../interfaces';

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem('@TOKEN');
  const decode: ITokenDecode = jwt_decode(token);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const getUser = async () => {
      await api
        .get(`/users/${decode.iat}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    };
    getUser();
  }, []);

  const createUser = async (data: TCreateUser) => {
    await api
      .post('/users', data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  const updateUser = async (data: TUpdateUser) => {
    await api
      .patch('/users', data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  const deleteUser = async () => {
    await api
      .delete('/users')
      .then(() => toast.success('Delete with sucess'))
      .catch((err) => console.error(err));
  };

  const login = async (data: ILogin) => {
    await api
      .post('/login', data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider
      value={{ createUser, deleteUser, updateUser, user, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
function jwt_decode(token: string): ITokenDecode {
  throw new Error('Function not implemented.');
}

