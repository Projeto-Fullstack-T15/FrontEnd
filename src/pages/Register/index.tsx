import { RegisterForm } from '../../components/Form/Register';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import { MainRegister } from './style';

const RegisterPage = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = 'Usuário Motors';
  return (
    <>
      <HeaderComponents
        isLoggedIn={isLoggedIn}
        isAdvertiser={isAdvertiser}
        username={username}
      />
      <MainRegister>
        <RegisterForm />
      </MainRegister>
      <FooterComponent />
    </>
  );
};

export default RegisterPage;
