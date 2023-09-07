import { useContext, useEffect } from "react";
import { CommentForm } from "../Form/Comment";
import { UserContext } from "../../contexts/user/userContext";
import { SectionComment } from "./style";

export const Comment = ({ announcementId }) => {
  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, [user]);

  const getInitials = (userName) => {
    if (!userName) {
      userName = "User Annonimous";
    }
    const words = userName.split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(2, words.length); i++) {
      initials += words[i].charAt(0).toUpperCase();
    }
    return initials;
  };

  const name = user?.user?.name || "User Annonimous";

  return (
    <SectionComment>
      <div className="container-section">
        <div className="commenter">
          <div className="capitalLetters">
            <h2>{getInitials(name)}</h2>
          </div>
          <h3>{name || "User Annonimous"}</h3>
        </div>
        <div className="container">
          <CommentForm announcementId={announcementId} />
        </div>
      </div>
    </SectionComment>
  );
};
