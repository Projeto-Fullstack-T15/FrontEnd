import { styled } from 'styled-components';

export const DetailModelDeleteStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;

  gap: 30px;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 1rem;

    color: var(--grey2);
  }
`;

export const ButtonsStyle = styled.div`
  width: 90%;

  display: flex;
  justify-content: end;

  gap: 15px;
`;
