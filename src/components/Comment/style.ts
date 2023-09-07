import { styled } from 'styled-components';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const SectionComment = styled.section`
  margin-bottom: 50px;
  width: 45%;
  margin-left: 11%;
  background-color: var(--grey10);
  display: flex;
  justify-content: center;

  .container-section {
    width: 90%;
    padding: 40px;
  }

  .container {
    border-radius: 4px;
    border: 2px solid var(--grey7);
    padding: 10px;
  }

  .commenter {
    font-family: var(--font-body);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

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
`;
