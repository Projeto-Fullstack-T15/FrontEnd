//import ButtonComponents from "../../Components/global/Buttons";

import AnnouncementList from "../../Components/AnnouncementList";
import HeaderComponents from "../../components/Header";
import NavComponents from "../../components/Nav";
import FooterComponent from "../../components/global/Footer";
import mockData from "../Home/mockdata.js";
import { HomeContainer } from "./style.js";

export const HomePage: React.FC = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = "Usuário Motors";
  return (
    <HomeContainer>
      <div className="header">
        <HeaderComponents
          isLoggedIn={isLoggedIn}
          isAdvertiser={isAdvertiser}
          username={username}
        />
      </div>
      <div className="body">
        <NavComponents />
        <AnnouncementList
          products={mockData}
          itemsPerPage={6}
        />
      </div>
      <FooterComponent />
    </HomeContainer>
  );
};
