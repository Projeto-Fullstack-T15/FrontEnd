import HeaderComponents from "../../components/Header";
import FooterComponent from "../../components/global/Footer";

export const ProfileAdminPage: React.FC = () => {
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

      <FooterComponent />
    </>
  );
};
