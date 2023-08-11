import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HeaderContainer,
  LogoLink,
  MenuButton,
  UserActions,
  UserMenu,
  UserName,
  UserOptions,
} from "./style";
import Logo from "./../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { UserAvatar } from "./Avatar";

interface HeaderProps {
  isLoggedIn: boolean;
  isAdvertiser: boolean;
  username?: string;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  isAdvertiser,
  username,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<GiHamburgerMenu size={20} />);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIcon(
      isMenuOpen ? <GiHamburgerMenu size={20} /> : <GrFormClose size={24} />
    );
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return (
    <HeaderContainer isOpen={isMenuOpen}>
      <Container>
        <LogoLink to="/">
          <img src={Logo} alt="Logo" />
        </LogoLink>
        <MenuButton onClick={toggleMenu}>{menuIcon}</MenuButton>
      </Container>
      <UserMenu isOpen={isMenuOpen}>
        {isLoggedIn ? (
          <>
            <UserName onClick={toggleUserOptions}>
              <UserAvatar username={username || ""} />
              {username}
            </UserName>
            {showUserOptions && (
              <UserOptions>
                <li>
                  <Link to="">Editar Perfil</Link>
                </li>
                <li>
                  <Link to="">Editar Endereço</Link>
                </li>
                {isAdvertiser && (
                  <li>
                    <Link to="">Editar Anúncio</Link>
                  </li>
                )}
                <li>
                  <Link to="">Sair</Link>
                </li>
              </UserOptions>
            )}
          </>
        ) : (
          <UserActions>
            <Link to="/">Fazer Login</Link>
            <Link to="/register">Cadastrar</Link>
          </UserActions>
        )}
      </UserMenu>
    </HeaderContainer>
  );
};
