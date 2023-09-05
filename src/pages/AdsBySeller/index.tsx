import axios from "axios";
import { useEffect, useState } from "react";
import AnnouncementList from "../../components/AnnouncementList";
import FooterComponent from "../../components/Global/Footer";
import HeaderComponents from "../../components/Header";
import SellerCard from "../../components/SellerCard";
import { Container } from "./style";

export const AdsBySellerPage: React.FC = () => {
  const [carData, setCarData] = useState([]);
  localStorage.setItem("sellerId", "1");
  const sellerId = localStorage.getItem("sellerId");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/announcements`).then((response) => {
      const data = response.data;

      const filteredCars = data.filter(
        (car) => car.account_id === Number(sellerId)
      );

      const formatedCars = filteredCars.map((car) => ({
        id: car.id,
        brand: car.brand,
        model: car.model,
        color: car.color,
        year: car.year,
        fuelType: car.fuel_type,
        milleage: car.mileage,
        price: car.price,
        description: car.description,
      }));
      setCarData(formatedCars);
    });
  }, [sellerId]);

  return (
    <Container>
      <HeaderComponents />
      <SellerCard />
      <AnnouncementList
        products={carData}
        itemsPerPage={6}
      />
      <FooterComponent />
    </Container>
  );
};
