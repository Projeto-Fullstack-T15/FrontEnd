import { styled } from 'styled-components';

export const FormEditAnnouncementStyle = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;

  gap: 15px;

  h4 {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .input--label {
    display: flex;
    flex-direction: column;

    gap: 15px;

    label {
      font-size: 0.875rem;
      font-weight: 500;

      color: var(--gray1);
    }

    input {
      width: 100%;
      height: 48px;

      border: solid 1px var(--grey7);

      &::placeholder {
        padding-left: 16px;
      }
    }

    textarea {
      border: solid 1px var(--grey7);

      height: 80px;

      resize: none;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      &::placeholder {
        padding-left: 16px;

        font-size: 1rem;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }
`;

export const DubleInputsStyle = styled.div`
  display: flex;

  gap: 20px;

  .input--label {
    width: 50%;
  }
`;

export const SectionButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SectionButtonsSubmitStyle = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;
