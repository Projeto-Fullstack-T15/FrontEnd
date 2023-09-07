import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ILogin,
  ILoginResponse,
  IUserContextProps,
  ICreateUser,
  TUpdateUser,
} from './interfaces';
import { api } from '../../services/api';
import { IResetPassword, ISendEmail, IUserResponse } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const token = localStorage.getItem('@TOKEN');
  const bearerToken = `Bearer ${token}`;

  const navigate = useNavigate();

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const getUser = async () => {
    await api
      .get<IUserResponse>(`/accounts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  };

  const createUser = async (data: ICreateUser) => {
    await api
      .post('/accounts', data)
      .then((res) => {
        setUser(res.data);
        openSuccessModal();
      })
      .catch((err) => toast.error(`${err.response.data.message} `));
  };

  const updateUser = async (data: TUpdateUser) => {
    await api
      .patch(`/accounts/${user.id}`, data, {
        headers: {
          Authorization: bearerToken,
        },
      })
      .then((res) => {
        setUser(res.data);
        getUser();
        toast.success('Perfil editado com succeso!');
      })
      .catch((err) => toast.error(err));
  };

  const deleteUser = async () => {
    await api
      .delete(`/accounts/${user.id}`)
      .then(() => toast.success('Delete with sucess'))
      .catch((err) => console.error(err));
  };

  const login = async (data: ILogin) => {
    await api
      .post<ILoginResponse>('/accounts/login', data)
      .then((res) => {
        localStorage.setItem('@TOKEN', res.data.token);
        getUser();
        toast.success('Login realizado com sucesso!');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => {
        toast.error('Email ou Senha incorreta');
        console.error(err);
      });
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    setTimeout(() => {
      navigate('/accounts/login');
    }, 3000);
  };

  const sendEmail = (sendEmailResetPassword: ISendEmail) => {
    api
      .post('/accounts/reset-password', sendEmailResetPassword)
      .then(() => {
        toast.success('E-mail enviado com sucesso !');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Erro ao enviar o e-mail, tente novamente mais tarde');
      });
  };

  const resetPassword = (resetPassword: IResetPassword, token: string) => {
    api
      .patch(`/accounts/reset-password/${token}`, {
        password: resetPassword.password,
      })
      .then(() => {
        toast.success('Senha atualizada com sucesso !');
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Erro ao atualizar a senha');
      });
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        createUser,
        deleteUser,
        updateUser,
        user,
        login,
        userLogout,
        openSuccessModal,
        closeSuccessModal,
        successModalOpen,
        sendEmail,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
