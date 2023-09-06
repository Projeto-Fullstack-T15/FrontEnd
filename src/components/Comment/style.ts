import { styled } from "styled-components";

export const Formulario = styled.form`
  max-width: 100%;
  width: 713px;
  box-shadow: 2px solid var(--grey2);
  display: flex;
  flex-direction: column;
  border: solid 1px Var(--grey6);
  margin: 10px auto;
  h2 {
    font-size: 16px;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 150px;
  margin: 6px 25px;
`;

export const Name = styled.div`
  color: var(--grey9);
  background-color: var(--random11);
  border-radius: 70%;
  width: 36px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 15px;
  }
`;

export const Description = styled.input`
  width: 90%;
  height: 123px;
  padding: 5px 0.5rem;
  margin: 10px auto 0px;
`;
export const FormComment = styled.div`
  width: 90%;
  height: 200px;
  padding: 5px 0.5rem;
  margin: 10px auto 10px;
  border: solid 1px Var(--grey6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonSubmit = styled.div`
  width: 90%;
  padding: 5px 0.5rem;
  margin: 10px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    width: 80px;
    height: 30px;
    background-color: var(--random11);
    color: var(--grey9);
    border-radius: 4px;
  }
`;
