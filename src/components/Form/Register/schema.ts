import * as yup from "yup";


export const registerSchema = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  password: yup.string().required('Campo obrigatório').min(6, 'Mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  phone: yup.string().required('Campo obrigatório'),
  accountType: yup.string().required('Campo obrigatório').oneOf(['comprador', 'anunciante'], 'Selecione uma opção válida'),
  user: yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    birthday: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
  }),
  address: yup.object().shape({
    zipCode: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    complement: yup.string(),
  }),
});

