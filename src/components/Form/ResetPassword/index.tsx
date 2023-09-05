import { useContext } from "react";
import { IResetPassword, IToken } from "../../../interfaces";
import { UserContext } from "../../../contexts/user/userContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "./schema";
import { Input } from "../Input";
import ButtonComponents from "../../Global/Buttons";
import { FormStyled, Title } from "./style";

export const ResetPasswordForm = ({ token }: IToken) => {
  const { resetPassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const submit: SubmitHandler<IResetPassword> = (data) => {
    resetPassword(data, token);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Title>Recuperação de senha</Title>
      <Input
        label="Nova senha"
        type="password"
        placeholder="Sua nova senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente a senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <ButtonComponents
        typeButton="submit"
        text="Atualizar senha"
        $type="brand1"
        $size="large"
      />
    </FormStyled>
  );
};
