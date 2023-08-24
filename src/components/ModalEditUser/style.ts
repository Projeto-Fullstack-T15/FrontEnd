import { styled } from 'styled-components';

export const SectionStyle = styled.section`
  width: 520px;
  height: 823px;

  background-color: var(--white);

  margin-top: 80px;

  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 90%;

  gap: 30px;

  .input__class {
    display: flex;
    flex-direction: column;

    width: 100%;

    input {
      border: 2px solid var(--grey7);

      padding: 5px;
      height: 35px;
    }
  }
`;

export const ButtonsStyle = styled.div`
  display: flex;
`;
