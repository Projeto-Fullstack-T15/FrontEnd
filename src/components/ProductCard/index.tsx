import Announcement from "../../contexts/announces/interface";
import {
  BadgeActiveInactiveStyle,
  BadgeLowPriceStyle,
  CardAnnouncerStyle,
  CardLabelsStyle,
  ProductCardStyle,
} from "./style";

interface ProductCardProps {
  announcement: Announcement;
  announcerView: boolean;
}

export const ProductCard = ({
  announcement,
  announcerView,
}: ProductCardProps) => {
  const title = announcement.model;
  const imageSrc =
    "https://omunicipio.com.br/wp-content/uploads/2021/07/que-coisas-procuram-as-mulheres-quando-compram-um-carro-kr1307-foto-2.png";

  const MOCKED_FIPE_PRICE: number = 2 * Math.random() * announcement.price;
  const isCheaper: boolean = MOCKED_FIPE_PRICE * 0.95 >= announcement.price;
  const isActive: boolean = Math.random() > 0.5;

  return (
    <ProductCardStyle>
      {isCheaper && <BadgeLowPriceStyle>$</BadgeLowPriceStyle>}
      {announcerView && (
        <BadgeActiveInactiveStyle className={isActive ? "active" : "inactive"}>
          {isActive ? "Ativo" : "Inativo"}
        </BadgeActiveInactiveStyle>
      )}
      <div className="card_header">
        <img src={imageSrc} />
      </div>
      <div className="card_body">
        <h3 title={title}> {title.slice(0, 38)} </h3>
        <p>{announcement.description}</p>
      </div>
      <div className="card_footer">
        <CardAnnouncerStyle>
          <span className="announcer_acronym"> RD </span>
          <span>{announcement.model} </span>
        </CardAnnouncerStyle>
        <CardLabelsStyle>
          <span className="card_label"> {announcement.mileage} KM </span>
          <span className="card_label"> {announcement.year} </span>
          <span className="card_price"> {announcement.price} </span>
        </CardLabelsStyle>
      </div>
    </ProductCardStyle>
  );
};
