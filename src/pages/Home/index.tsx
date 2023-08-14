//import ButtonComponents from "../../Components/global/Buttons";

import HeaderComponents from '../../components/Header';
import NavComponents from '../../components/Nav';
import FooterComponent from '../../components/global/Footer';

export const HomePage: React.FC = () => {
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
      <NavComponents />
      <FooterComponent />
    </>
  );
};
