import AnnouncementList from '../../components/AnnouncementList';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import NavComponents from '../../components/Nav';
import { HomeContainer } from './style';

export const HomePage: React.FC = () => {
  const isLoggedIn = false;
  const isAdvertiser = false;
  const username = 'Usuário Motors';

  return (
    <HomeContainer>
      <div className='header'>
        <HeaderComponents
          isLoggedIn={isLoggedIn}
          isAdvertiser={isAdvertiser}
          username={username}
        />
      </div>
      <div className='body'>
        <NavComponents />
        <AnnouncementList products={[]} itemsPerPage={6} />
      </div>
      <FooterComponent />
    </HomeContainer>
  );
};
