import { styled } from 'styled-components';

export const SectionStyle = styled.section`
  width: 520px;
  height: 331px;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 80px;

  border-radius: 5px;
`;

export const TitleAndCloneStyle = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
  }

  svg {
    height: 24px;
    width: auto;

    cursor: pointer;
  }
`;

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
