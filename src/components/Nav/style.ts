import styled from "styled-components";

export const NavStyle = styled.nav`
   width: 16rem;


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

      >ul {
        list-style: none;
      }
    }
    
    .rangeOptions {
      width: 100%;
      span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--grey3);
        font-weight: 600;
        font-size: 10px;
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
