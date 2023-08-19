import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginUser } from "../../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user/userContext";
import ButtonComponents from "../../global/Buttons";
import { Input } from "../Input";


export const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<ILoginUser> = (data) => {
    loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label='Senha'
        type="password"
        placeholder='Digite aqui seu email'
        register = {register("password")}
        error={errors.password}
      />
      <ButtonComponents text="Entrar" $type="grey1" $size="large" />
    </form>
  );
};
