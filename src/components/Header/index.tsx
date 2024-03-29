import { useContext, useEffect, useState } from 'react';
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
import { UserContext } from '../../contexts/user/userContext';
import ModalEditUser from '../Modais/ModalEditUser';
import ModalEditAddress from '../Modais/ModalEditAddress';

const HeaderComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<GiHamburgerMenu size={20} />);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);

  const { userLogout, user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  const nameUser = (user && user.user && user.user.name) || '';
  const isAdvertiser = user && user.account_type === 'ANNOUNCER';

  const token = localStorage.getItem('@TOKEN');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    userLogout();
    window.location.href = '/login';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIcon(
      isMenuOpen ? <GiHamburgerMenu size={20} /> : <GrFormClose size={24} />
    );
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const openEditUserModal = () => {
    setIsEditUserModalOpen(true);
  };

  const openEditAddressModal = () => {
    setIsEditAddressModalOpen(true);
  };

  return (
    <HeaderContainerStyled>
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
              <UserAvatarComponents username={nameUser} />
              {nameUser}
            </UserNameStyled>
            {showUserOptions && (
              <UserOptionsStyled>
                <li>
                  <Link to='#' onClick={openEditUserModal}>
                    Editar Perfil
                  </Link>
                </li>
                <li>
                  <Link to='#' onClick={openEditAddressModal}>
                    Editar Endereço
                  </Link>
                </li>
                {isAdvertiser && (
                  <li>
                    <Link to='/profileAdmin'>Meus Anúncios</Link>
                  </li>
                )}
                <li>
                  <Link to='#' onClick={handleLogout}>
                    Sair
                  </Link>
                </li>
              </UserOptionsStyled>
            )}
          </>
        ) : (
          <UserActionsStyled>
            <Link to='/login'>Fazer Login</Link>
            <Link to='/register'>Cadastrar</Link>
          </UserActionsStyled>
        )}
      </UserMenuStyled>
      {isEditUserModalOpen && (
        <ModalEditUser setIsEditUserModalOpen={setIsEditUserModalOpen} />
      )}
      {isEditAddressModalOpen && (
        <ModalEditAddress
          setIsEditAddressModalOpen={setIsEditAddressModalOpen}
        />
      )}
    </HeaderContainerStyled>
  );
};

export default HeaderComponents;
