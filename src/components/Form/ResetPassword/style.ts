import { styled } from "styled-components";

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

  @media screen and (min-width: 769px){
    width: 30%;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 600;
  color: var(--grey0);
`;