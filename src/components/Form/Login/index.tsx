import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user/userContext';
import { Input } from '../Input';
import { ILogin } from '../../../contexts/user/interfaces';
import ButtonComponents from '../../Global/Buttons';
import { FormStyled, Title } from './style';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<ILogin> = (data) => {
    login(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Title>Login</Title>
      <Input
        label='Email'
        type='email'
        placeholder='Digitar email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Digitar senha'
        register={register('password')}
        error={errors.password}
      />
      <Link to=''>Esqueci minha senha</Link>
      <ButtonComponents text='Entrar' $type='brand1' $size='large' />
      <p>Ainda não possui conta ?</p>
      <Link to='/register'>
        <ButtonComponents text='Cadastrar' $type='outline2' $size='large' />
      </Link>
    </FormStyled>
  );
};
