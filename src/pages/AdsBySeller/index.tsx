import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnnouncementList from "../../components/AnnouncementList";
import FooterComponent from "../../components/Global/Footer";
import HeaderComponents from "../../components/Header";
import SellerCard from "../../components/SellerCard";
import { Container } from "./style";

export const AdsBySellerPage: React.FC = () => {
  const [carData, setCarData] = useState([]);
  const sellerId = useParams().id;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/announcements`).then((response) => {
      const data = response.data;
      const filteredCars = data.filter(
        (car) => car.account_id === Number(sellerId)
      );

      setCarData(filteredCars);
    });
  }, [sellerId]);

  return (
    <Container>
      <HeaderComponents />
      <div className='sellerData'>
        <SellerCard />
        <div className='whiteBox'></div>
        <AnnouncementList
          products={carData}
          itemsPerPage={6}
          announcerView={true}
        />
      </div>
      <FooterComponent />
    </Container>
  );
};
