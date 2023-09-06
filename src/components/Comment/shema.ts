import * as yup from "yup";

export const CommentSchema = yup.object().shape({
  text: yup.string().max(150),
});

export type TComment = yup.InferType<typeof CommentSchema>;
