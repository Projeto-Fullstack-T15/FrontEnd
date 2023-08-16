import { createContext } from 'react';
import { IUserContextProps } from './interfaces';

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem('@TOKEN');

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
