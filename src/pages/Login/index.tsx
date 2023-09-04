import { LoginForm } from '../../components/Form/Login';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import { MainLogin } from './style';

const LoginPage = () => {
  return (
    <>
      <HeaderComponents />
      <MainLogin>
        <LoginForm />
      </MainLogin>
      <FooterComponent />
    </>
  );
};

export default LoginPage;
