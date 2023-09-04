import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ILogin,
  ILoginResponse,
  IUserContextProps,
  TCreateUser,
  TUpdateUser,
} from "./interfaces";
import { api } from "../../services/api";
import { IUserResponse } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const navigate = useNavigate();

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const getUser = async () => {
    const token = localStorage.getItem("@TOKEN");
    const bearerToken = `Bearer ${token}`;

    await api
      .get<IUserResponse>(`/accounts`, {
        headers: {
          Authorization: bearerToken,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  };

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
      .post<ILoginResponse>("/accounts/login", data)
      .then((res) => {
        localStorage.setItem("@TOKEN", res.data.token);
        getUser();
        toast.success("Login realizado com sucesso!");
        // setTimeout(() => {
        //   navigate("/");
        // }, 3000);
      })
      .catch((err) => console.error(err));
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        deleteUser,
        updateUser,
        user,
        login,
        userLogout,
        openSuccessModal,
        closeSuccessModal,
        successModalOpen
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
