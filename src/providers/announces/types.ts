export interface IProviderProps {
  children: React.ReactNode;
}

export interface IAnnouce {
  email: string;
  name: string;
  id: number;
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmpassword: string;
}

export type IRegisterAnnounce = Omit<IRegisterForm, "confirmpassword">;

export interface IAnnounceContext {
  CreateAnnounce: (formData: IRegisterForm) => Promise<void>;
  announces: IAnnouce[] | Array<null>;
  DeleteAnnounce: (id: string) => Promise<void>;
  UpdateAnnounce: (data: IAnnouce) => Promise<void>;
}
