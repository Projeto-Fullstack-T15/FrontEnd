import { styled } from "styled-components";

export const FieldStyled = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &.with-div {
    width: 50%;

    input, textarea {
      width: 70%;
    }

    @media screen and (min-width: 375px) {
      input, textarea {
        width: 75%;
      }
    }

    @media screen and (min-width: 425px) {
      input, textarea {
        width: 78%;
      }
    }

    @media screen and (min-width: 768px) {
      input, textarea {
        width: 88%;
      }
    }

    @media screen and (min-width: 1024px) {
      input, textarea {
        width: 75%;
      }
    }

    @media screen and (min-width: 1040px) {
      input, textarea {
        width: 82%;
      }
    }
  }

  label {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--grey1);
  }


  input, textarea {
    width: -webkit-fill-available;
    border-radius: 0.25rem;
    border: 2px solid var(--grey7);
    padding: 1rem;
    font-size: 1rem;
    color: var(--grey2);
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: var(--brand2);
    }

    ::placeholder {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      color: var(--grey3);
      outline: none;
    }

    &.with-background {
      background-color: var(--grey10);
      border: none;
    }
  }
`;
