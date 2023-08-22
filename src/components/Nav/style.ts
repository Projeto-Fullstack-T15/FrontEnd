import styled from "styled-components";

export const NavStyle = styled.nav`
  width: 250px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
    padding: 10px;
    .selectOptions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .rangeOptions {
      span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--grey3);
        font-weight: 600;
        font-size: 10px;
      }

      input[type="range"] {
        --webkit-appearance: none;
        height: 1px;
        background: #9747ff;
        color: #9747ff;
        width: 40%;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        background: #9747ff;
        cursor: pointer;
        border-radius: 50%;
      }

      .range-input-max {
        direction: rtl;
      }
      input[type="range"][name="maxPrice"][data-max] {
        transform: scaleX(-1);
      }
      .rangeInputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0px;
        width: 100%;
        padding: 10px 0px;
      }

      ul {
        list-style: none;
        font-weight: bolder;

        li {
          color: var(--grey3);
          font-weight: 600;
        }
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
