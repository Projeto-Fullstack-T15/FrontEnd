import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CommentsBox } from "../../components/CommentsBox";
import ButtonComponents from "../../components/Global/Buttons";
import FooterComponent from "../../components/Global/Footer";
import HeaderComponents from "../../components/Header";
import Announcement from "../../contexts/announces/interface";
import { api } from "../../services/api";
import {
  BackgroundBrandStyle,
  Container,
  DivDetailsProduct,
  DivYearKMPriceStyle,
  SectionAnnouncerStyle,
  SectionDescriptionStyle,
  SectionDetailsProductStyle,
  SectionPhotosStyle,
  SectionProductDetailStyle,
} from "./style";

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

  const handleWhatsAppClick = () => {
    const url = `whatsapp://send?phone=${detailProduct.account.phone}`;
    window.location.href = url;
  };

  const handleRedirect = () => {
    const url = `/adsbyseller/${detailProduct.account.id}`;
    window.location.href = url;
  };

  return Object.keys(detailProduct).length !== 0 ? (
    <>
      <BackgroundBrandStyle />
      <HeaderComponents />
      <Container>
        <DivDetailsProduct>
          <SectionProductDetailStyle>
            <div className='image--product'>
              <img
                src={detailProduct.cover_image}
                alt='imagem do anuncio'
              />
            </div>
            <SectionDetailsProductStyle>
              <h3>
                {detailProduct.brand} - {detailProduct.model}
              </h3>
              <DivYearKMPriceStyle>
                <div className='year_KM'>
                  <span>{detailProduct.year}</span>
                  <span>{detailProduct.mileage / 1000}KM</span>
                </div>
                <p>
                  {detailProduct.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </DivYearKMPriceStyle>
              <ButtonComponents
                text='Comprar'
                $size='small'
                $width='100px'
                typeButton='button'
                $type='brand1'
                onClick={handleWhatsAppClick}
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
                {/* {detailProduct.gallery_images.map((img) => {
                return (
                  <li className='photos'>
                    <img src={img.url} alt='fotos do carro' />
                  </li>
                );
              })} */}
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
                <li className='photos'>
                  <img
                    src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'
                    alt='fotos do carro'
                  />
                </li>
              </ul>
            </SectionPhotosStyle>
            <SectionAnnouncerStyle>
              <div>
                {detailProduct.account.user.name
                  .split(" ")
                  .map((elt) => elt[0])
                  .join("")}
              </div>
              <h4>{detailProduct.account.user.name}</h4>
              <p>{detailProduct.account.user.description}</p>
              <ButtonComponents
                text='Ver todos anuncios'
                $size='large'
                $width='206px'
                typeButton='button'
                $type='big45'
                onClick={handleRedirect}
              />
            </SectionAnnouncerStyle>
          </div>
        </DivDetailsProduct>
        <section>
          <CommentsBox />
        </section>
      </Container>
      <FooterComponent />
    </>
  ) : null;
};

export default DetailAnnouncement;
