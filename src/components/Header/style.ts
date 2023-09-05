import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IsOpenProps } from './interface';

export const HeaderContainerStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 10px;
  width: 100%;
  background-color: var(--grey10);
  border-bottom: 2px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const LogoLinkStyled = styled(Link)`
  align-items: center;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

export const MenuButtonStyled = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const UserMenuStyled = styled.div<IsOpenProps>`
  display: ${(props: IsOpenProps) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  background-color: var(--white);
  position: fixed;
  top: ${(props: IsOpenProps) => (props.isOpen ? '50px' : '-100%')};
  right: 0;
  z-index: 100;
  transition: top 0.3s ease-in-out;

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: flex-end;
    margin: 0;
    width: auto;
    top: 0;
  }
`;

export const UserNameStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey2);
  font-size: 1rem;
  padding: 20px 0 10px 0;
  cursor: pointer;
  margin-right: 50px;

  @media screen and (min-width: 769px) {
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
    padding-left: 35px;
  }
`;

export const UserOptionsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border-radius: 4px;
  padding: 10px;
  width: 50%;

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: var(--grey2);
    }
  }

  @media screen and (min-width: 769px) {
    background-color: var(--grey9);
    box-shadow: 0px 4px 40px -10px #00000040;
    width: 13%;
    align-items: flex-start;
    position: fixed;
    top: 53px;
    right: 32px;
  }

  @media screen and (min-width: 1439px) {
    width: 11%;
    top: 53px;
    right: 7px;
  }
`;

export const UserActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 20px 20px 20px 10px;
  width: 90%;

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

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px 40px 14px 40px;
    width: 100%;
    border-left: 2px solid rgba(0, 0, 0, 0.1);

    a {
      &:nth-child(2) {
        width: 40%;
      }
    }
  }
`;

export const Overlay = styled.div<IsOpenProps>`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: ${(props: IsOpenProps) => (props.isOpen ? 'block' : 'none')};
  z-index: 99;
`;
