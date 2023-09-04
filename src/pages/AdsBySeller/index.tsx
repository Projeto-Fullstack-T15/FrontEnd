import AnnouncementList from "../../components/AnnouncementList";
import FooterComponent from "../../components/Global/Footer";
import HeaderComponents from "../../components/Header";
import SellerCard from "../../components/SellerCard";
import mockData from "./mockData";
import { Container } from "./style";

export const AdsBySellerPage: React.FC = () => {
  return (
    <Container>
      <HeaderComponents
        isLoggedIn={false}
        isAdvertiser={false}
      />
      <SellerCard />
      <AnnouncementList
        products={mockData}
        itemsPerPage={6}
      />
      <FooterComponent />
    </Container>
  );
};
