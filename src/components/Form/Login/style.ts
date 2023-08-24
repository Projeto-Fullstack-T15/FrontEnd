import { styled } from "styled-components";

export const Title = styled.h1`
  font-family: var(--font-title);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--grey0);
  align-self: flex-start;
`;

export const FormStyled = styled.form`
  background-color: var(--grey10);
  border-radius: 4px;
  width: 80%;
  height: max-content;
  margin-top: 45px;
  margin-bottom: 100px;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  a {
    text-decoration: none;
    &:nth-of-type(1) {
      font-family: var(--font-body);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey2);
      align-self: flex-end;
      margin-top: -20px;
    }
  }

  p {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--grey2);
  }

  @media screen and (min-width: 769px){
    width: 30%;
  }
`;
