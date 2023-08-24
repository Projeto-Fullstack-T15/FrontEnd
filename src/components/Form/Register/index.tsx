import { useContext } from "react";
import { UserContext } from "../../../contexts/user/userContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import { Input } from "../Input";
import { TCreateUser } from "../../../contexts/user/interfaces";
import ButtonComponents from "../../global/Buttons";
import {
  DivInput,
  DivInputRadio,
  DivInputs,
  FormStyled,
  TextLabel,
  Title,
} from "./style";

export const RegisterForm = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateUser>({
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<TCreateUser> = (data) => {
    createUser(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Title>Cadastro</Title>
      <p>Informações pessoais</p>
      <Input
        label="Nome"
        type="text"
        placeholder="Ex: Samuel Leão"
        register={register("user.name")}
        error={errors.user?.name}
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Ex: samuel@kenzie.com.br"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register("user.cpf")}
        error={errors.user?.cpf}
      />
      <Input
        label="Celular"
        type="text"
        placeholder="(DDD) 90000-0000"
        register={register("phone")}
        error={errors.phone}
      />
      <Input
        label="Data de nascimento"
        type="text"
        placeholder="00/00/00"
        register={register("user.birthday")}
        error={errors.user?.birthday}
      />
      <Input
        label="Descrição"
        type="text"
        placeholder="Digitar descrição"
        register={register("user.description")}
        error={errors.user?.description}
      />
      <p>Informações de endereço</p>
      <Input
        label="CEP"
        type="text"
        placeholder="00000.000"
        register={register("address.zipCode")}
        error={errors.address?.zipCode}
      />
      <DivInputs>
        <Input
          label="Estado"
          type="text"
          placeholder="Digitar Estado"
          register={register("address.state")}
          error={errors.address?.state}
          withDiv="yes"
        />
        <Input
          label="Cidade"
          type="text"
          placeholder="Digitar cidade"
          register={register("address.city")}
          error={errors.address?.city}
          withDiv="yes"
        />
      </DivInputs>
      <Input
        label="Rua"
        type="text"
        placeholder="Digitar rua"
        register={register("address.street")}
        error={errors.address?.street}
      />
      <DivInputs>
        <Input
          label="Número"
          type="text"
          placeholder="Digitar número"
          register={register("address.number")}
          error={errors.address?.number}
          withDiv="yes"
        />
        <Input
          label="Complemento"
          type="text"
          placeholder="Ex: apart 307"
          register={register("address.complement")}
          error={errors.address?.complement}
          withDiv="yes"
        />
      </DivInputs>
      <DivInput>
        <TextLabel>Tipo de Conta</TextLabel>
        <DivInputRadio>
          <label>
            <input
              type="radio"
              value="comprador"
              {...register("accountType")}
            />
            <span>Comprador</span>
          </label>
          <label>
            <input
              type="radio"
              value="anunciante"
              {...register("accountType")}
            />
            <span>Anunciante</span>
          </label>
        </DivInputRadio>
        {errors.accountType && <p>{errors.accountType.message}</p>}
      </DivInput>
      <Input
        label="Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <ButtonComponents
        text="Finalizar cadastro"
        $type="brand1"
        $size="large"
      />
    </FormStyled>
  );
};