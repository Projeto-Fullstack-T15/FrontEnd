import { FaCar } from "react-icons/fa";
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
  const isCheaper: boolean =
    announcement.fipe_price * 0.95 >= announcement.price;
  const nameAcronym = announcement.account.user.name
    .split(" ")
    .filter((_, i) => i <= 1)
    .map((v) => v[0])
    .join("")
    .toUpperCase();
  const handleRedirect = () => {
    window.location.href = `/productDetail/${announcement.id}`;
  };

  return (
    <ProductCardStyle onClick={handleRedirect}>
      {isCheaper && <BadgeLowPriceStyle>$</BadgeLowPriceStyle>}
      {announcerView && (
        <BadgeActiveInactiveStyle
          className={announcement.is_active ? "active" : "inactive"}
        >
          {announcement.is_active ? "Ativo" : "Inativo"}
        </BadgeActiveInactiveStyle>
      )}
      <div className='card_header'>
        <img
          src={announcement.cover_image}
          onError={() => (announcement.cover_image = null)}
        />
        <FaCar />
      </div>
      <div className='card_body'>
        <h3 title={announcement.model}> {announcement.model.slice(0, 38)} </h3>
        <p>
          {announcement.description.length > 85
            ? announcement.description.slice(0, 85) + "..."
            : announcement.description}
        </p>
      </div>
      <div className='card_footer'>
        <CardAnnouncerStyle>
          <span className='announcer_acronym'> {nameAcronym} </span>
          <span> {announcement.account.user.name} </span>
        </CardAnnouncerStyle>
        <CardLabelsStyle>
          <span className='card_label'>
            {" "}
            {String(announcement.mileage).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              "."
            )}{" "}
            KM{" "}
          </span>
          <span className='card_label'> {announcement.year} </span>
          <span className='card_price'>
            {" "}
            R${" "}
            {String(announcement.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            ,00{" "}
          </span>
        </CardLabelsStyle>
      </div>
    </ProductCardStyle>
  );
};
