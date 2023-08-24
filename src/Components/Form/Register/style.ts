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

  p {
    font-family: var(--font-body);
    font-size: 0.8755rem;
    font-weight: 600;
    color: var(--grey0);
    align-self: flex-start;
  }

  @media screen and (min-width: 769px) {
    width: 30%;
  }
`;

export const DivInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const DivInput = styled.div`
  width: 100%;
`;

export const TextLabel = styled.label`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--grey1);
`;

export const DivInputRadio = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 20px;

  label {
    width: 500%;
    display: flex;
    align-items: center;

    span {
      font-family: var(--font-body);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      padding: 8px 16px;
      background-color: white;
      color: var(--grey0);
      border: 2px solid var(--grey4);
      border-radius: 4px;
      transition: background-color 0.3s ease, color 0.3s ease;

      &:hover {
        border: 2px solid var(--brand1);
      }
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + span,
    input[type="radio"]:checked + label {
      background-color: var(--brand1);
      color: white;
      border: 2px solid var(--brand1);
    }
  }
`;
