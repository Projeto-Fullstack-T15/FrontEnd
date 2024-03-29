import { useContext } from 'react';
import AnnouncementList from '../../components/AnnouncementList';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import NavComponents from '../../components/Nav';
import { AnnouncementContext } from '../../contexts/announces/announcementContext';
import { HomeContainer } from './style';

export const HomePage: React.FC = () => {
  const { filteredAnnouncements } = useContext(AnnouncementContext);

  return (
    <HomeContainer>
      <HeaderComponents />
      <div className='body'>
        <NavComponents />
        <AnnouncementList
          products={filteredAnnouncements.value}
          itemsPerPage={6}
          announcerView={false}
        />
      </div>
      <FooterComponent />
    </HomeContainer>
  );
};
