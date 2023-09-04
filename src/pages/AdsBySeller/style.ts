import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  & .contentBox {
    width: 90%;
    margin-top: 150px;
    background-color: var(--white);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .capitalLetters {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--brand1);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: var(--white);
    }
  }
`;
