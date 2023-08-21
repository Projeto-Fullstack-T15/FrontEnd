import { styled } from 'styled-components';

export const FooterStyle = styled.footer`
  position: static;
  bottom: 0;

  background-color: var(--grey0);
  color: var(--white);

  height: 140px;
  width: 90vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;

  p {
    font-size: 14px;
  }

  svg {
    background-color: var(--grey1);

    height: 50px;
    width: 50px;

    border-radius: 4px;

    font-size: 14px;

    cursor: pointer;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    padding: 5% 0;

    width: 100%;
  }
`;
