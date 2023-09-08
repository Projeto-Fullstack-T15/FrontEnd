import { createContext, useState } from 'react';
import { IComment, ICommentContextProps, ICommentRequest } from './interface';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CommentContext = createContext<ICommentContextProps>(
  {} as ICommentContextProps
);

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState<IComment[]>([]);

  const getComment = async (announcementId: number) => {
    await api
      .get(`/announcements/${announcementId}/comments`)
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
      .post(`/announcements/${announcementId}/comments`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`,
        },
      })
      .then(() => {
        toast.success('Comentário criado com sucesso!');
      })
      .catch((err) => console.error(err));
  };

  const updateComment = async (commentId: number, data: ICommentRequest) => {
    await api
      .patch(`/comments/${commentId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`,
        },
      })
      .then((res) => {
        setComment((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId ? { ...comment, ...res.data } : comment
          )
        );

        toast.success('Comentário atualizado com sucesso!');
      })
      .catch((err) => console.error(err));
  };

  const deleteComment = async (commentId: number) => {
    console.log(commentId);
    await api
      .delete(`/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`,
        },
      })
      .then(() => {
        setComment((prevComment) =>
          prevComment.filter((comment) => comment.id !== commentId)
        );
        toast.success('Comentário deletado com sucesso!');
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
