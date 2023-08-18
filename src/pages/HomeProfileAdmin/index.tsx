import HeaderComponents from "../../components/Header";
import FooterComponent from "../../components/global/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Announcement from "../../interfaces/announcement.interface";

export const ProfileAdminPage: React.FC = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = "Usuário Motors";

  const [announces, setAnnounces] = useState<Announcement[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Announcement[]>("/annouces");

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
        <ul>
          {announces.map((announce) => (
            <li key={announce.id}>
              <h2>{announce.brand}</h2> - <h2>{announce.model}</h2>
              <p>{announce.description}</p>
              <div>
                <span>{announce.year}</span>
                <span>{announce.price}</span>
                <span>{announce.mileage}</span>
              </div>
            </li>
          ))}
        </ul>
      </>

      <FooterComponent />
    </>
  );
};
