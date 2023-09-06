import { createContext, useState } from "react";
import { IComment, ICommentContextProps, ICommentRequest } from "./interface";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CommentContext = createContext<ICommentContextProps>(
  {} as ICommentContextProps
);

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState<IComment>({} as IComment);

  const getComment = async (announcementId: number) => {
    await api
      .get(`/announcements/${announcementId}/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => console.error(err));
  };

  const createComment = async (
    announcementId: number,
    data: ICommentRequest
  ) => {
    await api
      .post(`/announcements/${announcementId}/comments`, data)
      .then((res) => {
        setComment(res.data);
        toast.success("Comentário criado com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  const updateComment = async (
    announcementId: number,
    data: ICommentRequest
  ) => {
    await api
      .patch(`/comments/${announcementId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setComment(res.data);
        toast.success("Comentário atualizado com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  const deleteComment = async (commentId: number) => {
    await api
      .delete(`/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setComment(res.data);
        toast.success("Comentário deletado com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        getComment,
        createComment,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
