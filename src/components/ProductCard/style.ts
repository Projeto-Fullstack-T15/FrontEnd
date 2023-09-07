import { styled } from 'styled-components';

export const ProductCardStyle = styled.div`
  width: 19.5rem;
  height: 21.875rem;
  margin: 1rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  transition: 250ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.075);

    > .card_header {
      border: 3px solid var(--brand1);
      > img {
        transform: scale(1.125);
      }
    }
  }

  > .card_header {
    box-sizing: border-box;
    width: 100%;
    padding: 0 1.5rem;
    height: 9.5rem;
    background-color: var(--grey7);
    position: relative;

    display: flex;
    align-items: center;
    overflow: hidden;

    > img {
      max-width: 100%;
      height: 100%;
      margin: auto;
      z-index: 2;
    }

    > svg {
      font-size: 3rem;
      position: absolute;
      top: calc(50% - 1.5rem);
      right: calc(50% - 1.5rem);
      color: rgba(0, 0, 0, 0.25);
    }
  }

  > .card_body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    > h3 {
      color: var(--grey1);
      font-size: 1rem;
      line-height: normal;
    }

    > p {
      color: var(--grey2);
      font-size: 0.875rem;
      line-height: 1.5rem;
      padding-right: 0.5rem;
    }
  }

  > .card_footer {
    justify-self: flex-end;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .buttons {
      display: flex;
      gap: 15px;
    }
  }
`;

export const CardAnnouncerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  max-width: 100%;

  > span.announcer_acronym {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--random8);

    display: flex;
    align-items: center;
    justify-content: center;

    line-height: 0;
    color: white;
  }

  > span {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
`;

export const CardLabelsStyle = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  > .card_label {
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    background: var(--brand4);
    color: var(--brand1);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  > .card_price {
    margin-left: auto;
    padding-right: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;

    color: var(--grey1);
  }
`;

export const BadgeLowPriceStyle = styled.span`
  position: absolute;
  right: 0.0625rem;
  top: 0.0625rem;
  display: flex;
  box-sizing: border-box;
  width: 1rem;
  height: 1.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--green1-strong);
  border: 1px solid var(--green1-weak);
  border-radius: 0.125rem;
  z-index: 1;
`;

export const BadgeActiveInactiveStyle = styled.span`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  padding: 0rem 0.5rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: white;
  z-index: 1;

  &.active {
    background-color: var(--brand1);
  }

  &.inactive {
    background-color: var(--grey4);
  }
`;
