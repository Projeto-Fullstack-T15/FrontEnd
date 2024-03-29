import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string()
    .required("Campo obrigatório")
    .min(8, "Mínimo 8 caracteres"),
});
