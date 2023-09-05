import { styled } from 'styled-components';

export const AnnouncementsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content {
    margin-top: 100px;
    margin-left: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    p {
      width: 225px;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
