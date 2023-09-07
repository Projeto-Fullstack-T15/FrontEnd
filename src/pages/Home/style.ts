import { styled } from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "body" "footer";
  grid-template-columns: 100%;
  grid-template-rows: 5rem max-content 8.75rem;

  >header {
    grid-area: header;
  }

  .body {
    grid-area: body;
    box-sizing: border-box;

    height: max-content;
    min-height: calc(100vh - 13.75rem);

    display: grid;
    grid-template-areas: "nav list";
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 100%;

    &>:nth-child(1) {
      grid-area: nav;
    }

    &>:nth-child(2) {
      grid-area: list;
    }
  }

  >footer {
    grid-area: footer;
  } 
`;
