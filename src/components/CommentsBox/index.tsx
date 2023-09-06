import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { DeleteCommentModal } from "../Modais/ModalDeleteComment";
import { CommentContext } from "../../contexts/comments/commentsContext";
import { UserContext } from "../../contexts/user/userContext";
import { FaBars } from "react-icons/fa";

export const CommentsBox = () => {
  const [comment, setComment] = useState([]);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(null);
  const [commentToDelete, setCommentToDelete] = useState(null);


  const { deleteComment } = useContext(CommentContext);
  const { user } = useContext(UserContext);

  const announcementId = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/announcements/${announcementId}/comments`)
      .then((response) => {
        setComment(response.data);
      });
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
    handleCloseModalDelete()
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setCommentToDelete(null)
  };

  return (
    <Container>
      <h2>Comentários</h2>
      {comment.map((comment) => (
        <div key={comment.id}>
          <div className="commenter">
            <div className="capitalLetters">
              <h2>{getInitials(comment.author)}</h2>
            </div>
            <h3>{comment.author || "User Annonimous"}</h3>
            <div className="point">·</div>
            <span>{getTimeDifference(comment.last_updated_at)}</span>
          </div>
          <div className="comment">
            {user.id === comment.account_id && (
              <div className="comment-options">
                <FaBars onClick={() => handleToggleOptions(comment.id)} />
              </div>
            )}
          </div>
          {isOptionsOpen === comment.id && (
            <div className="comment-options-menu">
              {/* <button onClick={}>Editar</button> */}
              <button onClick={() => handlePrepareToDelete(comment.id)}>
                Excluir
              </button>
            </div>
          )}
        </div>
      ))}

      <DeleteCommentModal
        open={isModalDeleteOpen}
        onClose={handleCloseModalDelete}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
};
