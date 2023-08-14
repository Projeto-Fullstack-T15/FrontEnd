import { Header } from "../../Components/Header";
import FooterComponent from "../../Components/global/Footer";
import contentImage from "../../assets/Content.png";
import { ProductCard } from "../../Components/ProductCard";
import { Nav } from "../../Components/Nav";
import { Image, MainStyled } from "./style";


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
      <section className="section_home">
        <Image>
          <img
            src={contentImage}
            alt="Imagem de capa"
            className="img_home"
          />
        </Image>
      </section>
      <MainStyled>
        <Nav
          key={"as"}
        />
        <ProductCard
          announcement={{
            brand: "bmw",
            color: "white",
            description: "veloz",
            fuelType: "2.0",
            id: 1,
            mileage: 234,
            model: "sass",
            price: 2551,
            year: 2002,
          }}
          announcerView={false}
          key={"as"}
        />
      </MainStyled>
      <FooterComponent />
    </>
  );
};
