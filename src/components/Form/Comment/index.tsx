import { useContext } from "react";
import { CommentContext } from "../../../contexts/comments/commentsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICommentRequest } from "../../../contexts/comments/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./shema";
import { Input } from "../Input";
import ButtonComponents from "../../Global/Buttons";
import { DivButton } from "./style";

export const CommentForm = ({ announcementId }) => {
  const { createComment, getComment } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const submit: SubmitHandler<ICommentRequest> = (data) => {
    createComment(announcementId, data);
    getComment(announcementId)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="textarea"
        placeholder="Digitar seu comentário"
        register={register("text")}
        error={errors.text}
        withBackground="yes"
      />
      <DivButton>
        <ButtonComponents
          typeButton="submit"
          text="Comentar"
          $type="brand1"
          $size="large"
        />
      </DivButton>
    </form>
  );
};
