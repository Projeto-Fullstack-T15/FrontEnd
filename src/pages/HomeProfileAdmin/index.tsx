import { useEffect, useState } from "react";
import { api } from "../../services/api";
import HeaderComponents from "../../Components/Header";
import FooterComponent from "../../Components/global/Footer";
import { StyledAnnouceList } from "./style";
import { ProductCard } from "../../Components/ProductCard";
/* import Announcement from "../../interfaces/announcement.interface"; */

export const ProfileAdminPage: React.FC = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = "Usuário Motors";

  const [announces, setAnnounces] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/annouces");

      setAnnounces(response.data);
    })();
  }, []);

  return (
    <>
      <HeaderComponents
        isLoggedIn={isLoggedIn}
        isAdvertiser={isAdvertiser}
        username={username}
      />
      <div>
        <div>
          <h2>SL</h2>
          <h3>Samuel Leão</h3>
          <p>Descrição do perfil</p>
          <button>Criar Anúncio</button>
        </div>
      </div>
      <>
        <StyledAnnouceList>
          {announces.map((announce) => (
            <ProductCard announcement={announce} announcerView={false} />
          ))}
        </StyledAnnouceList>
      </>

      <FooterComponent />
    </>
  );
};
