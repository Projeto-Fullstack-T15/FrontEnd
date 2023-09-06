export interface IModalEditUserProps {
  setIsEditUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormEditUser {
  email?: string | undefined;
  phone?: string | undefined;
  name?: string | undefined;
  cpf?: string | undefined;
  birthday?: Date | string | undefined;
  description?: string | undefined;
}

export interface IFormEditUserUser {
  name?: string | undefined;
  description?: string | undefined;
  birthday?: Date | string | undefined;
  cpf?: string | undefined;
}
