import { Header } from '../../components/Header';
//import ButtonComponents from "../../Components/global/Buttons";

export const HomePage: React.FC = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = 'Usuário Motors';
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        isAdvertiser={isAdvertiser}
        username={username}
      />
      {/* <ButtonComponents text="Clique Aqui" $type="brand1" $size="large" /> */}
    </>
  );
};
