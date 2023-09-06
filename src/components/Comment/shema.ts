import * as yup from "yup";

export const CommentSchema = yup.object().shape({
  comment: yup.string().required("Campo obrigatório"),
});
