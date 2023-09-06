import { useParams } from 'react-router-dom';
import ButtonComponents from '../../components/Global/Buttons';
import FooterComponent from '../../components/Global/Footer';
import HeaderComponents from '../../components/Header';
import {
  DivDetailsProduct,
  DivYearKMPriceStyle,
  SectionAnnouncerStyle,
  SectionDescriptionStyle,
  SectionDetailsProductStyle,
  SectionPhotosStyle,
  SectionProductDetailStyle,
} from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Announcement from '../../contexts/announces/interface';
import { toast } from 'react-toastify';

const DetailAnnouncement = () => {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState<Announcement>(
    {} as Announcement
  );

  useEffect(() => {
    const retriveAnnoucement = async () => {
      await api
        .get<Announcement>(`/announcements/${productId}`)
        .then((res) => {
          setDetailProduct(res.data);
        })
        .catch((err) => toast.error(err));
    };
    retriveAnnoucement();
  }, [productId]);

  return (
    <>
      <HeaderComponents />
      <DivDetailsProduct>
        <SectionProductDetailStyle>
          <div className='image--product'>
            <img src={detailProduct.cover_image} alt='imagem do anuncio' />
          </div>
          <SectionDetailsProductStyle>
            <h3>Nome do carro</h3>
            <DivYearKMPriceStyle>
              <div className='year_KM'>
                <span>{detailProduct.year}</span>
                <span>{detailProduct.mileage}</span>
              </div>
              <p>
                {
                  detailProduct.price /* .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }) */
                }
              </p>
            </DivYearKMPriceStyle>
            <ButtonComponents
              text='Comprar'
              $size='small'
              $width='100px'
              typeButton='button'
              $type='brand1'
            />
          </SectionDetailsProductStyle>
          <SectionDescriptionStyle>
            <h3 className='title--description'>Descrição</h3>
            <p className='text--description'>{detailProduct.description}</p>
          </SectionDescriptionStyle>
        </SectionProductDetailStyle>
        <div className='container__right'>
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
          <SectionAnnouncerStyle>
            <div>
              {detailProduct.account.user.name
                .split(' ')
                .map((elt) => elt[0])
                .join('')}
            </div>
            <h4>{detailProduct.account.user.name}</h4>
            <p>{detailProduct.account.user.description}</p>
            <ButtonComponents
              text='Ver todos anuncios'
              $size='large'
              $width='206px'
              typeButton='button'
              $type='big45'
            />
          </SectionAnnouncerStyle>
        </div>
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
      <FooterComponent />
    </>
  );
};

export default DetailAnnouncement;
