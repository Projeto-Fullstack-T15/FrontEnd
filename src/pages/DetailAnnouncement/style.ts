import { styled } from 'styled-components';

export const DivDetailsProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid 1px orange;

  gap: 15px;

  margin: 0 auto;

  .container__right {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    width: 80%;
  }
`;

export const SectionProductDetailStyle = styled.section`
  margin-top: 100px;

  border: solid 1px blue;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  gap: 15px;

  .image--product {
    border: solid 1px red;
    border-radius: 5px;
    background-color: var(--white);

    width: 95%;
    height: 400px;
  }
`;

export const SectionDetailsProductStyle = styled.section`
  background-color: var(--white);
  border: solid 1px yellow;
  border-radius: 5px;

  width: 95%;
  height: 220px;

  padding: 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;

    margin-left: 16px;
  }

  button {
    margin-left: 16px;
  }
`;

export const DivYearKMPriceStyle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  margin-left: 16px;

  .year_KM {
    display: flex;

    gap: 10px;

    span {
      background-color: var(--brand4);

      padding: 5px 8px;

      border-radius: 5px;

      font-weight: 500;
      font-size: 0.875rem;

      color: var(--brand1);
    }
  }

  p {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const SectionDescriptionStyle = styled.section`
  border: solid 1px pink;
  background-color: var(--white);

  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 25px;
  padding: 25px 0;

  border-radius: 5px;

  .title--description {
    margin-left: 16px;

    font-size: 1.25rem;
    font-weight: 600;

    color: var(--grey1);
  }

  .text--description {
    margin-left: 16px;

    font-size: 1rem;
    font-weight: 400;

    color: var(--grey2);
  }
`;

export const SectionPhotosStyle = styled.section`
  width: 95%;
  height: 359px;

  background-color: var(--white);
  border: solid 1px purple;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  h3 {
    color: var(--grey1);

    font-size: 1.25rem;
    font-weight: 600;

    margin-left: 16px;
  }

  .list__photos {
    display: flex;
    flex-wrap: wrap;

    gap: 5px;

    list-style: none;

    margin-left: 16px;

    .photos {
      width: 90px;
      height: 90px;

      border: solid 1px black;
      border-radius: 5px;
    }
  }
`;

export const SectionAnnouncerStyle = styled.section`
  background-color: var(--white);
  border: solid 1px gold;
  border-radius: 5px;

  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;

  padding: 30px 0;

  div {
    background-color: var(--brand1);

    width: 77px;
    height: 77px;

    color: var(--white);

    font-size: 1.625rem;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;

    color: var(--grey1);
  }

  p {
    text-align: center;

    font-size: 1rem;
    font-weight: 400;

    color: var(--grey2);

    line-height: 28px;
  }
`;
