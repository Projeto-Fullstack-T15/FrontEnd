import styled from "styled-components";

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  .edit {
    display: none;
    cursor: pointer;
  }

  .commenter {
    font-family: var(--font-body);
    display: flex;
    align-items: center;
    gap: 10px;

    & h3 {
      font-size: 16px;
      font-weight: 600;
    }

    & span {
      font-size: 12px;
      color: var(--grey4);
    }
  }

  .point {
    font-size: 30px;
    color: var(--grey4);
  }

  .capitalLetters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    background-color: ${getRandomColor()};
  }

  .edit {
    display: none;
    cursor: pointer;
  }

  .comment-options {
    cursor: pointer;
  }

  .comment-options-menu {
    button {
      font-family: var(--font-body);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
