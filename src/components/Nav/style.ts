import styled from 'styled-components';

export const NavStyle = styled.nav`
  margin-top: 77px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    gap: 20px;
    padding: 10px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .rangeOptions {
      span {
        width: 120%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--grey3);
        font-weight: 600;
        font-size: 10px;
      }
      input[type='range'] {
        -webkit-appearance: none;
        height: 1px;
        background: #9747ff;
        color: #9747ff;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        background: #9747ff;
        cursor: pointer;
        border-radius: 50%;
      }
    }
    ul {
      list-style: none;
      font-weight: bolder;

      li {
        color: var(--grey3);
        font-weight: 600;
      }
    }

    .navFooterButton {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 100%;
      }
    }
  }
`;
