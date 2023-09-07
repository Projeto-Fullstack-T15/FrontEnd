import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AnnouncementList from "../../components/AnnouncementList";
import FooterComponent from "../../components/Global/Footer";
import HeaderComponents from "../../components/Header";
import SellerCard from "../../components/SellerCard";
import { UserContext } from "../../contexts/user/userContext";
import { Container } from "./style";
/* import Announcement from "../../interfaces/announcement.interface"; */

export const ProfileAdminPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/announcements`).then((response) => {
      const data = response.data;
      const filteredCars = data.filter(
        (car) => car.account_id === Number(user.id)
      );

      setCarData(filteredCars);
    });
  }, [user]);

  return (
    <Container>
      <HeaderComponents />
      <div className='sellerData'>
        <SellerCard id={user.id} />
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
