import { styled } from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  font-weight: 600;

  .totalPages {
    color: var(--grey3);
  }

  .paginationButton {
    background: none;
    color: initial;
    border: initial;
    padding: initial;
    font-size: initial;
    color: var(--brand2);
    font-weight: 600;
  }
`;
