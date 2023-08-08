import { css, styled } from "styled-components";

interface InputProps {
  withBackground?: string;
}

export const Input = styled.input<InputProps>`
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

  ${(props) =>
    props.withBackground === "yes" &&
    css`
      background-color: var(--grey8);
    `}
`;
