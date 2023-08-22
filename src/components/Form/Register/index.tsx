import { useContext } from "react";
import { UserContext } from "../../../contexts/user/userContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import { Input } from "../Input";

export const RegisterForm = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<>({
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<> = (data) => {
    createUser(data);
  };

  return(
    <form onSubmit={handleSubmit(submit)}>
      <h1>Cadastro</h1>
      <p>Informaçóes pessoais</p>
      <Input
        label="Nome"
        type="text"
        placeholder="Ex: Samuel Leão"
        register={register('name')}
        error={errors.name}
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Ex: samuel@kenzie.com.br"
        register={register('email')}
        error={errors.email}
      />
      <Input
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register('cpf')}
        error={errors.cpf}
      />
      <Input
        label="Celular"
        type="text"
        placeholder="(DDD) 90000-0000"
        register={register('phone')}
        error={errors.phone}
      />
      <Input
        label="Data de nascimento"
        type="text"
        placeholder="00/00/00"
        register={register('birthDate')}
        error={errors.birthDate}
      />
      <Input
        label="Descrição"
        type="text"
        placeholder="Digitar descrição"
        register={register('description')}
        error={errors.description}
      />
      <p>Informações de endereço</p>
      <Input
        label="CEP"
        type="text"
        placeholder="00000.000"
        register={register('zipCode')}
        error={errors.zipCode}
      />
      <Input
        label="Estado"
        type="text"
        placeholder="Digitar Estado"
        register={register('state')}
        error={errors.state}
      />
      <Input
        label="Cidade"
        type="text"
        placeholder="Digitar cidade"
        register={register('city')}
        error={errors.city}
      />
    </form>
  )
};
