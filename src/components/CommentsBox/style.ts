import styled from 'styled-components';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Container = styled.div`
  background-color: var(--grey10);
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  margin: 20px 0;

  .title {
    width: 90%;
    margin-bottom: 15px;
    h2 {
      font-family: var(--font-title);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--grey1);
    }
  }

  p {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--grey2);
    line-height: 1.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 10px;
  }

  .container-header-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .commenter {
    font-family: var(--font-body);
    display: flex;
    align-items: center;
    gap: 10px;

    & h3 {
      font-size: 0.875rem;
      font-weight: 600;
    }

    & span {
      font-size: 0.75rem;
      color: var(--grey3);
    }
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

  .point {
    font-size: 1.875rem;
    color: var(--grey3);
  }

  .option {
  }

  .comment-options {
    cursor: pointer;
  }

  .options {
    position: relative;
  }

  .comment-options-menu {
    padding: 5px;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--grey10);
    border-radius: 2px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      font-family: var(--font-body);
      font-size: 1rem;
      font-weight: 600;
      background-color: var(--grey10);
      cursor: pointer;
    }
  }
`;
