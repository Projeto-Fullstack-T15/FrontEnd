import * as yup from "yup";

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});
