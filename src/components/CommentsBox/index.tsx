import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { DeleteCommentModal } from "../Modais/ModalDeleteComment";
import { CommentContext } from "../../contexts/comments/commentsContext";
import { UserContext } from "../../contexts/user/userContext";
import { FaBars } from "react-icons/fa";
import { EditCommentModal } from "../Modais/ModalEditComment";

export const CommentsBox = ({ announcementId }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(null);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [initialCommentText, setInitialCommentText] = useState("");

  const { comment, deleteComment, getComment } = useContext(CommentContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getComment(announcementId);
  }, [announcementId]);

  const getTimeDifference = (updatedAt) => {
    const now = new Date();
    const updated = new Date(updatedAt);
    const timeDifference = now.getTime() - updated.getTime();

    const hoursDifference = Math.floor(timeDifference / 3600000);
    const daysDifference = Math.floor(timeDifference / 86400000);
    if (hoursDifference < 1) {
      return `há ${Math.floor(timeDifference / 60000)} minutos`;
    } else if (hoursDifference < 24) {
      return `há ${hoursDifference} horas`;
    } else {
      return `há ${daysDifference} dias`;
    }
  };

  const getInitials = (name) => {
    if (!name) {
      name = "User Annonimous";
    }
    const words = name.split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(2, words.length); i++) {
      initials += words[i].charAt(0).toUpperCase();
    }
    return initials;
  };

  const handleToggleOptions = (commentId) => {
    if (isOptionsOpen === commentId) {
      setIsOptionsOpen(null);
    } else {
      setIsOptionsOpen(commentId);
    }
  };

  const handlePrepareToDelete = (commentId) => {
    setCommentToDelete(commentId);
    setIsModalDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteComment(commentToDelete);
    handleCloseModalDelete();
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setCommentToDelete(null);
  };

  const handlePrepareToEdit = (commentId, commentText) => {
    setEditCommentId(commentId);
    setInitialCommentText(commentText);
    setIsEditModalOpen(true);
  };

  const handleCloseModalEdit = () => {
    setIsEditModalOpen(false);
    setEditCommentId(null);
  };

  return (
    <Container>
      <div className="title">
        <h2>Comentários</h2>
      </div>
      {comment.map((comment) => (
        <div key={comment.id} className="container">
          <div className="container-header-comment">
            <div className="commenter">
              <div className="capitalLetters">
                <h2>{getInitials(comment.account.user.name)}</h2>
              </div>
              <h3>{comment.account.user.name || "User Annonimous"}</h3>
              <div className="point">·</div>
              <span>{getTimeDifference(comment.last_updated_at)}</span>
            </div>

            <div className="option">
              {user.id === comment.account_id && (
                <div className="comment-options">
                  <FaBars onClick={() => handleToggleOptions(comment.id)} />
                </div>
              )}
              <div className="options">
                {isOptionsOpen === comment.id && (
                  <div className="comment-options-menu">
                    <button
                      onClick={() =>
                        handlePrepareToEdit(comment.id, comment.text)
                      }
                    >
                      Editar
                    </button>
                    <button onClick={() => handlePrepareToDelete(comment.id)}>
                      Excluir
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p>{comment.text}</p>
        </div>
      ))}

      <DeleteCommentModal
        open={isModalDeleteOpen}
        onClose={handleCloseModalDelete}
        onConfirm={handleConfirmDelete}
      />

      <EditCommentModal
        open={isEditModalOpen}
        onClose={handleCloseModalEdit}
        commentId={editCommentId}
        commentText={initialCommentText}
      />
    </Container>
  );
};
