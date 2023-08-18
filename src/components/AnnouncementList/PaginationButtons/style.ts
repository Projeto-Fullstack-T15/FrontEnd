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

  a {
    text-decoration: none;
    color: var(--brand2);
  }
`;
