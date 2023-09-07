import { styled } from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  gap: 5px;
  margin-top: -50px;

  width: 90%;

  .container__divs--input {
    display: flex;
    align-items: center;

    gap: 20px;
  }
`;

export const DivOfInput = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  width: 100%;

  input {
    display: flex;
    align-items: center;

    border: solid 1px var(--grey7);

    font-size: 1rem;

    height: 48px;
    width: 100%;

    /* margin left or padding left 16px in placeholder */

    &::placeholder {
      padding-left: 16px;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: end;

  gap: 20px;
  margin-top: 15px;

  width: 100%;
`;
