import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface HeaderContainerProps {
  isOpen: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 10px;
  background-color: var(--grey10);
  border-bottom: 2px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: ${(props) => (props.isOpen ? "none" : "2px solid #ddd")};
    box-shadow: ${(props) =>
      props.isOpen ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)"};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const LogoLink = styled(Link)`
  align-items: center;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const MenuButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

interface UserMenuProps {
  isOpen: boolean;
}

const UserMenu = styled.div<UserMenuProps>`
  display: ${(props: UserMenuProps) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 769px) {
    align-items: flex-end;
    margin: 0;
  }
`;

const UserName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey2);
  font-size: 1rem;
  cursor: pointer;
`;

const UserOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  background-color: var(--grey9);
  border-radius: 4px;
  padding: 10px;
  width: 50%;
  box-shadow: 0px 4px 40px -10px #00000040;

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: var(--grey2);
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 20px;
  width: 100%;

  a {
    margin: 5px 0;
    color: var(--grey2);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;

    &:nth-child(2) {
      color: var(--grey0);
      border: 2px solid var(--grey4);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0.5rem 0;
    }
  }
`;

export {
  HeaderContainer,
  Container,
  LogoLink,
  MenuButton,
  UserMenu,
  UserName,
  UserOptions,
  UserActions,
};
