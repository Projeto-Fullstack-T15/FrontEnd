import styled from "styled-components";

export const NavStyle = styled.nav`
  box-sizing: border-box;
  width: 20rem;
  height: max-content;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    gap: 1.25rem;
    padding: 0.75rem;

    .selectOptions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

      >ul {
        list-style: none;
        width: 100%;

        >li {
          cursor: pointer;
          width: 100%;

          &:hover {
            background-color: rgba(0,0,0, 0.1);
          }
        }
        
        >li.selected {
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }
    
    .rangeOptions {
      width: 100%;
      box-sizing: border-box;

      span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--grey3);
        font-weight: 600;
        font-size: 10px;
        padding: 0.25rem;
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
