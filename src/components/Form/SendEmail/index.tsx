import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendEmailSchema } from "./schema";
import { ISendEmail } from "../../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../../contexts/user/userContext";
import { Input } from "../Input";
import ButtonComponents from "../../Global/Buttons";
import { FormStyled, Title } from "./style";

export const SendEmailForm = () => {
  const { sendEmail } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmail>({
    resolver: yupResolver(sendEmailSchema),
  });

  const submit: SubmitHandler<ISendEmail> = (data) => {
    sendEmail(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Title>Informe um e-mail para a recuperação de senha</Title>
      <Input
        label="Email"
        type="email"
        placeholder="Ex: samuel@kenzie.com.br"
        register={register("email")}
        error={errors.email}
      />
      <ButtonComponents
        typeButton="submit"
        text="Enviar"
        $type="brand1"
        $size="large"
      />
    </FormStyled>
  );
};
