import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  zipCode: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  complement: yup.string(),
  accountType: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});
