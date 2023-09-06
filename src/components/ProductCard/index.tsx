import { FaCar } from 'react-icons/fa';
import Announcement from '../../contexts/announces/interface';
import {
    BadgeActiveInactiveStyle,
    BadgeLowPriceStyle,
    CardAnnouncerStyle,
    CardLabelsStyle,
    ProductCardStyle,
} from './style';

interface ProductCardProps {
    announcement: Announcement;
    announcerView: boolean;
}

export const ProductCard = ({
    announcement,
    announcerView,
}: ProductCardProps) => {
    const MOCKED_FIPE_PRICE: number = 2 * Math.random() * announcement.price;
    const isCheaper: boolean = MOCKED_FIPE_PRICE * 0.95 >= announcement.price;

    const nameAcronym = announcement.account.user.name.split(" ").filter((v, i) => i <= 1).map(v => v[0]).join("").toUpperCase();
    const title = `${announcement.brand} ${announcement.model}`;

    return (
        <ProductCardStyle>
            {
                isCheaper &&
                <BadgeLowPriceStyle>$</BadgeLowPriceStyle>
            }
            {
                announcerView &&
                <BadgeActiveInactiveStyle className={announcement.is_active ? 'active' : 'inactive'}>
                    {announcement.is_active ? 'Ativo' : 'Inativo'}
                </BadgeActiveInactiveStyle>

            }
            <div className='card_header'>
                <img src={announcement.cover_image} onError={() => announcement.cover_image = null} />
                <FaCar />
            </div>
            <div className='card_body'>
                <h3 title={title}> {title.slice(0, 38)} </h3>
                <p>
                    {
                        announcement.description.length > 85 ?
                            announcement.description.slice(0, 85) + '...' :
                            announcement.description
                    }
                </p>
            </div>
            <div className='card_footer'>
                <CardAnnouncerStyle>
                    <span className='announcer_acronym'> {nameAcronym} </span>
                    <span> {announcement.account.user.name} </span>
                </CardAnnouncerStyle>
                <CardLabelsStyle>
                    <span className='card_label'> {String(announcement.mileage).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} KM </span>
                    <span className='card_label'> {announcement.year} </span>
                    <span className='card_price'> R$ {String(announcement.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.')},00 </span>
                </CardLabelsStyle>
            </div>
        </ProductCardStyle>
    );
};