import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Api } from '../../services/api';
import { IAnnounceContext, IProviderProps, IRegisterAnnounce } from './types';

export const UserContext = createContext({} as IAnnounceContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [announces, setAnnounce] = useState(null);
  const navigate = useNavigate();

  async function getAnnounce() {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const tokenUser = JSON.parse(token);
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await Api.get('/', {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        });
        navigate('/');
      } catch (error) {
        navigate('/');
      }
    }
  }

  useEffect(() => {
    getAnnounce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function CreateAnnounce(formData: IRegisterAnnounce) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await Api.post('/', formData);
      toast.success('Anúncio criado com sucesso');
      navigate('/');
    } catch (errors) {
      toast.error('Ops, algo deu errado');
    }
  }

  async function DeleteAnnounce(id) {
    try {
      const tokenUser = JSON.parse(localStorage.getItem('@TOKEN'));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await Api.delete(`//${id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });

      const Anno = announces.filter((announ) => announ.id !== id);
      setAnnounce(Anno);
      toast.success('Excluída com sucesso');
    } catch (error) {
      console.log(error);
    }
  }

  async function UpdateAnnounce(data) {
    const tokenUser = JSON.parse(localStorage.getItem('@TOKEN'));
    const id = data.id;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await Api.patch(`//${id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      const newtecn = announces.map((annou) => {
        if (id === annou.id) {
          return { ...annou, ...data };
        } else {
          return annou;
        }
      });
      setAnnounce(newtecn);
      toast.success('Atualizado com sucesso');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        CreateAnnounce,
        announces,
        DeleteAnnounce,
        UpdateAnnounce,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
