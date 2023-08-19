import { styled } from "styled-components";

export const AnnouncementsListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
