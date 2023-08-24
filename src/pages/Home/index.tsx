import contentImage from '../../assets/Content.png';
import FooterComponent from '../../components/Global/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { ProductCard } from '../../components/ProductCard';
import { Image, MainStyled } from './style';

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
      <section className='section_home'>
        <Image>
          <img src={contentImage} alt='Imagem de capa' className='img_home' />
        </Image>
      </section>
      <MainStyled>
        <Nav key={'as'} />
        <ProductCard
          announcement={{
            brand: 'bmw',
            color: 'black',
            description: 'veloz',
            fuelType: '2.0',
            id: 1,
            mileage: 234,
            model: 'sass',
            price: 2551,
            year: 2002,
          }}
          announcerView={false}
          key={'as'}
        />
      </MainStyled>
      <FooterComponent />
    </>
  );
};
