import { RegisterForm } from "../../Components/Form/Register";
import HeaderComponents from "../../Components/Header";
import FooterComponent from "../../Components/global/Footer";
import { MainRegister } from "./style";

const RegisterPage = () => {
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
      <MainRegister>
        <RegisterForm />
      </MainRegister>
      <FooterComponent />
    </>
  );
};

export default RegisterPage;
