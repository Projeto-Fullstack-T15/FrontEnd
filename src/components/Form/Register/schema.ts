import * as yup from 'yup';

const userSchema = yup
  .object()
  .shape({
    name: yup.string().required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    birthday: yup.date().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
  })
  .required();

const addressSchema = yup
  .object()
  .shape({
    zip_code: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    complement: yup.string().optional(),
  })
  .required();

export const registerSchema = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'Mínimo 8 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  phone: yup.string().required('Campo obrigatório'),
  account_type: yup
    .string()
    .required('Campo obrigatório')
    .oneOf(['BUYER', 'ANNOUNCER'], 'Selecione uma opção válida'),
  user: userSchema.required(''),
  address: addressSchema.required(''),
});
