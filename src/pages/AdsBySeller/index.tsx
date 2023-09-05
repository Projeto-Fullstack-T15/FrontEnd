import AnnouncementList from '../../components/AnnouncementList';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import SellerCard from '../../components/SellerCard';
import { Container } from './style';

export const AdsBySellerPage: React.FC = () => {
  return (
    <Container>
      <HeaderComponents />
      <SellerCard />
      <AnnouncementList products={[]} itemsPerPage={6} />
      <FooterComponent />
    </Container>
  );
};
