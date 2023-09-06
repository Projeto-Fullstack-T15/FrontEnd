import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .sellerData {
    & .contentBox {
      width: 80%;
      position: absolute;
      margin-top: 200px;
      margin-bottom: 100px;
      background-color: var(--white);
      z-index: 1;
      padding: 40px;
      line-height: 50px;
    }
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
  /* width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .contentBox {
      width: 80%;
      position: absolute;
      margin-top: 200px;
      margin-bottom: 100px;
      background-color: var(--white);
      z-index: 1;
      padding: 40px;
      line-height: 50px;
    }
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
    } */

  .whiteBox {
    height: 50px;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
  > footer {
    grid-area: footer;
  }
`;
