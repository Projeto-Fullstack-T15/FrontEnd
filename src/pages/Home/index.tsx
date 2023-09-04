import AnnouncementList from '../../components/AnnouncementList';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import NavComponents from '../../components/Nav';
import { HomeContainer } from './style';

export const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <div className='header'>
        <HeaderComponents />
      </div>
      <div className='body'>
        <NavComponents />
        <AnnouncementList products={[]} itemsPerPage={6} />
      </div>
      <FooterComponent />
    </HomeContainer>
  );
};
