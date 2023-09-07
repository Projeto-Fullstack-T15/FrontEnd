import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & > section {
    width: 72%;
    background-color: var(--white);
    padding: 40px;
    border-radius: 5px;
  }
`;

export const BackgroundBrandStyle = styled.div`
  width: 100%;
  height: 600px;

  position: absolute;
  top: 0;

  z-index: -1;

  background-color: var(--brand1);
`;

export const DivDetailsProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  margin: 0 auto;

  margin-top: -50px;

  .container__right {
    display: flex;
    flex-direction: column;

    margin-top: -275px;

    gap: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    width: 80%;
  }
`;

export const SectionProductDetailStyle = styled.section`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  gap: 15px;

  .image--product {
    border-radius: 5px;
    background-color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 400px;
  }
`;

export const SectionDetailsProductStyle = styled.section`
  background-color: var(--white);
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
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

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

    overflow-y: scroll;

    list-style: none;

    margin-left: 16px;

    .photos {
      width: 90px;
      height: 90px;

      border: solid 1px blue;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 5px;

      img {
        height: 50px;
        width: auto;
      }
    }

    @media (min-width: 768px) {
      gap: 15px;
      width: 395px;

      .photos {
        width: 108px;
        height: 108px;
      }
    }
  }
`;

export const SectionAnnouncerStyle = styled.section`
  background-color: var(--white);
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

export const SectionComment = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
`;
