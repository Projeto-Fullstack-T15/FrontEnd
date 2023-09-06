export interface IModalEditAddressProps {
  setIsEditAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEditAddress {
  zip_code?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  street?: string | undefined;
  number?: string | undefined;
  complement?: string | undefined;
}
