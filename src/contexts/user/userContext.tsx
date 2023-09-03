import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ILogin,
  IUserContextProps,
  TCreateUser,
  TUpdateUser,
} from "./interfaces";
import { api } from "../../services/api";
import { IUser } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const bearerToken = `Bearer ${token}`;
  const [user, setUser] = useState<IUser>({} as IUser);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const navigate = useNavigate();

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  useEffect(() => {
    const getUser = async () => {
      await api
        .get(`/accounts`, {
          headers: {
            Authorization: bearerToken,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => console.error(err));
    };
    getUser();
  }, []);

  const createUser = async (data: TCreateUser) => {
    await api
      .post("/accounts", data)
      .then((res) => {
        setUser(res.data);
        openSuccessModal();
      })
      .catch((err) => toast.error(`${err.response.data.message} `));
  };

  const updateUser = async (data: TUpdateUser) => {
    await api
      .patch("/users", data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  const deleteUser = async () => {
    await api
      .delete("/users")
      .then(() => toast.success("Delete with sucess"))
      .catch((err) => console.error(err));
  };

  const login = async (data: ILogin) => {
    await api
      .post("/accounts/login", data)
      .then((res) => {
        setUser(res.data);
        toast.success("Login realizado com sucesso!");
        setTimeout(() => {
          navigate("/profileadmin");
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        deleteUser,
        updateUser,
        user,
        login,
        openSuccessModal,
        closeSuccessModal,
        successModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
