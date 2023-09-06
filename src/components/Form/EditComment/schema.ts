import * as yup from "yup";

export const commentSchema = yup.object().shape({
  text: yup.string().required("Campo obrigatório"),
});
