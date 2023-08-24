import { LoginForm } from '../../components/Form/Login';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import { MainLogin } from './style';

const LoginPage = () => {
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
      <MainLogin>
        <LoginForm />
      </MainLogin>
      <FooterComponent />
    </>
  );
};

export default LoginPage;
