import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./style";

export const CommentsBox = () => {
  const [comment, setComment] = useState([]);
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

  return (
    <Container>
      <h2>Comentários</h2>
      {comment.map((comment) => (
        <div key={comment.id}>
          <div className='commenter'>
            <div className='capitalLetters'>
              <h2>{getInitials(comment.author)}</h2>
            </div>
            <h3>{comment.author || "User Annonimous"}</h3>
            <div className='point'>·</div>
            <span>{getTimeDifference(comment.last_updated_at)}</span>
          </div>
          <div className='comment'>
            <a href='#'>
              <p>{comment.text}</p>
            </a>
            <span className='edit'>Editar comentário?</span>
          </div>
        </div>
      ))}
    </Container>
  );
};
