import { LoginForm } from "../../Components/Form/Login";
import HeaderComponents from "../../Components/Header";
import FooterComponent from "../../Components/global/Footer";
import { MainLogin } from "./style";

const LoginPage = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = "Usuário Motors";
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
