import { UseFormRegisterReturn } from "react-hook-form";
import { FieldStyled } from "./style";

export interface IInput {
  label?: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
  withBackground?: string;
  withDiv?: string;
  defaultValue?: string;
}

export const Input = ({
  label,
  type,
  register,
  error,
  placeholder,
  withBackground,
  withDiv,
  defaultValue,
}: IInput) => {
  return (
    <FieldStyled className={withDiv === "yes" ? "with-div" : ""}>
      <label htmlFor={register.name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        defaultValue={defaultValue || ""}
        className={withBackground === "yes" ? "with-background" : ""}
      />
      {error && <p>{error.message}</p>}
    </FieldStyled>
  );
};
