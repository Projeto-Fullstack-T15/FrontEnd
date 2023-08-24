import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import UserAvatarComponents from './Avatar';
import {
  ContainerStyled,
  HeaderContainerStyled,
  LogoLinkStyled,
  MenuButtonStyled,
  Overlay,
  UserActionsStyled,
  UserMenuStyled,
  UserNameStyled,
  UserOptionsStyled,
} from './style';
import { HeaderProps } from './interface';

const HeaderComponents = ({
  isLoggedIn,
  isAdvertiser,
  username,
}: HeaderProps) => {
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
    <HeaderContainerStyled isOpen={isMenuOpen}>
      <ContainerStyled>
        <LogoLinkStyled to='/'>
          <img src={Logo} alt='Logo' />
        </LogoLinkStyled>
        <MenuButtonStyled onClick={toggleMenu}>{menuIcon}</MenuButtonStyled>
      </ContainerStyled>
      <Overlay isOpen={isMenuOpen} />
      <UserMenuStyled isOpen={isMenuOpen}>
        {isLoggedIn ? (
          <>
            <UserNameStyled onClick={toggleUserOptions}>
              <UserAvatarComponents username={username || ''} />
              {username}
            </UserNameStyled>
            {showUserOptions && (
              <UserOptionsStyled>
                <li>
                  <Link to=''>Editar Perfil</Link>
                </li>
                <li>
                  <Link to=''>Editar Endereço</Link>
                </li>
                {isAdvertiser && (
                  <li>
                    <Link to=''>Editar Anúncio</Link>
                  </li>
                )}
                <li>
                  <Link to=''>Sair</Link>
                </li>
              </UserOptionsStyled>
            )}
          </>
        ) : (
          <UserActionsStyled>
            <Link to='/'>Fazer Login</Link>
            <Link to='/register'>Cadastrar</Link>
          </UserActionsStyled>
        )}
      </UserMenuStyled>
    </HeaderContainerStyled>
  );
};

export default HeaderComponents;
