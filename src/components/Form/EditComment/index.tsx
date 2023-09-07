import { SubmitHandler, useForm } from "react-hook-form";
import ButtonComponents from "../../Global/Buttons";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "./schema";
import { ICommentRequest } from "../../../contexts/comments/interface";
import { Title } from "./style";
import { useContext } from "react";
import { CommentContext } from "../../../contexts/comments/commentsContext";
import { Box } from "@mui/material";

export const EditCommentForm = ({ onClose, commentId, commentText }) => {
  const { updateComment } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const submit: SubmitHandler<ICommentRequest> = (data) => {
    updateComment(commentId, data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box display="flex" flexDirection="column" gap="30px">
        <Title>Editar Comentário</Title>
        <Input
          label="Comentário:"
          type="text"
          placeholder="comentario"
          register={register("text")}
          error={errors.text}
          defaultValue={commentText}
        />
        <Box display="flex" gap="50px" justifyContent="space-between">
          <ButtonComponents
            typeButton="button"
            text="Cancelar"
            $type="brand1"
            $size="large"
            onClick={onClose}
          />
          <ButtonComponents
            typeButton="submit"
            text="Salvar Alterações"
            $type="brand1"
            $size="large"
          />
        </Box>
      </Box>
    </form>
  );
};
