import ButtonComponents from '../../components/Global/Buttons';
import HeaderComponents from '../../components/Header';
import {
  DivDetailsProduct,
  DivYearKMPriceStyle,
  SectionDescriptionStyle,
  SectionDetailsProductStyle,
  SectionPhotosStyle,
  SectionProductDetailStyle,
} from './style';

const DetailAnnouncement = () => {
  return (
    <>
      <HeaderComponents isLoggedIn={false} isAdvertiser={false} />
      <DivDetailsProduct>
        <SectionProductDetailStyle>
          <div className='image--product'>
            <img src='' alt='imagem do carro aqui' />
          </div>
          <SectionDetailsProductStyle>
            <h3>Nome do carro</h3>
            <DivYearKMPriceStyle>
              <div className='year_KM'>
                <span>2013</span>
                <span>0 KM</span>
              </div>
              <p>R$ 00.000,00</p>
            </DivYearKMPriceStyle>
            <ButtonComponents
              text='Comprar'
              $size='small'
              $width='100px'
              typeButton='button'
              $type='brand1'
            />
          </SectionDetailsProductStyle>
        </SectionProductDetailStyle>
        <SectionDescriptionStyle>
          <h3 className='title--description'>Descrição</h3>
          <p className='text--description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium distinctio quis aliquid! Nihil sit blanditiis nesciunt
            explicabo veritatis quod magnam quisquam adipisci corrupti ex,
            praesentium earum fuga unde quibusdam autem!
          </p>
        </SectionDescriptionStyle>
        <SectionPhotosStyle>
          <h3>Fotos</h3>
          <ul className='list__photos'>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
            <li className='photos'>
              <img src='' alt='fotos do carro' />
            </li>
          </ul>
        </SectionPhotosStyle>
      </DivDetailsProduct>
      <section>
        <h3>Comentários</h3>
        <ul>
          <li>
            <div>
              <div>JL</div>
              <h5>Júlia Lima</h5>
              <span>há 3 dias</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              explicabo ipsum omnis laboriosam quam? Impedit, sapiente!
              Laboriosam totam consequatur rem. Similique voluptate fuga aliquam
              veritatis delectus magnam unde consectetur vero.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default DetailAnnouncement;
