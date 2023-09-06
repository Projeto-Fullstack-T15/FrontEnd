import { styled } from 'styled-components';

export const AnnouncementsListStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: hidden;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    row-gap: 1rem;
    overflow: auto;

    >p {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
