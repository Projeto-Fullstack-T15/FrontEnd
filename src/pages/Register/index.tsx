import { useContext } from 'react';
import { RegisterForm } from '../../components/Form/Register';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import { MainRegister } from './style';
import { UserContext } from '../../contexts/user/userContext';
import { SuccessModal } from '../../components/Modais/ModalSuccessRegister';

const RegisterPage = () => {
  const { successModalOpen, closeSuccessModal } = useContext(UserContext);
  return(  
    <>
      <HeaderComponents />
      <MainRegister>
        <RegisterForm />
      </MainRegister>
      <FooterComponent />

      <SuccessModal open={successModalOpen} onClose={closeSuccessModal} />
    </>
  );
};

export default RegisterPage;
