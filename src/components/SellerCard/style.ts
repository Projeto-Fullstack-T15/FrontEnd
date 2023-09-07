import styled from "styled-components";

export const SellerCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 30vh;
  background-color: var(--brand1);
  .capitalLetters {
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
  .sellerData {
    display: flex;
    align-items: center;
    gap: 20px;
    & span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--brand4);
      border-radius: 4px;
      padding: 0px 8px;
      max-height: 24px;
    }
    & h5 {
      color: var(--brand1);
      font-family: var(--font-body);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
    }
    .contentBoxNoData {
      display: flex;
      height: 100vh;
      background-color: red;
    }
  }
`;
