import * as yup from "yup";

export const sendEmailSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido")
});
