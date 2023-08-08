import axios from "axios";
import { useEffect, useState } from "react";

interface Car {
  ID: number;
  Brand: string;
  Model: string;
  Color: string;
  Year: number;
  FuelType: string;
  Mileage: number;
  Price: number;
}

export const Nav = () => {
  // const { cars } = useCarContext(); TODO : USAR ESSA FORMA QUANDO O CONTEXTO ESTIVER PRONTO

  const [, setCars] = useState<Car[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [mileageRange, setMileageRange] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((response) => {
        const carData: Car[] = response.data;
        setCars(carData);
        // const uniqueBrands = [...new Set(cars.map((car) => car.Brand))];
        // setBrands(uniqueBrands); TODO : USAR ESSA FORMA QUANDO O CONTEXTO ESTIVER PRONTO
        const uniqueBrands = [...new Set(carData.map((car) => car.Brand))];
        setBrands(uniqueBrands);

        const uniqueModels = [...new Set(carData.map((car) => car.Model))];
        setModels(uniqueModels);

        const uniqueColors = [...new Set(carData.map((car) => car.Color))];
        setColors(uniqueColors);

        const uniqueYears = [...new Set(carData.map((car) => car.Year))];
        setYears(uniqueYears);

        const uniqueFuelTypes = [
          ...new Set(carData.map((car) => car.FuelType)),
        ];
        setFuelTypes(uniqueFuelTypes);

        const minMileage = Math.min(...carData.map((car) => car.Mileage));
        const maxMileage = Math.max(...carData.map((car) => car.Mileage));
        setMileageRange([minMileage, maxMileage]);

        const minPrice = Math.min(...carData.map((car) => car.Price));
        const maxPrice = Math.max(...carData.map((car) => car.Price));
        setPriceRange([minPrice, maxPrice]);
      })
      .catch((error) => {
        console.error("Erro ao buscar os carros:", error);
      });
  }, []);

  return (
    <nav>
      <div>
        <h2>Marcas</h2>
        <ul>
          {brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Modelo</h2>
        <ul>
          {models.map((model) => (
            <li key={model}>{model}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cor</h2>
        <ul>
          {colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Ano:</h2>
        <ul>
          {years.map((year) => (
            <li key={year}>{year}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Combustível</h2>
        <ul>
          {fuelTypes.map((fuelType) => (
            <li key={fuelType}>{fuelType}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Km:</h2>
        <select>
          {mileageRange.map((mileage) => (
            <option
              key={mileage}
              value={mileage}
            >
              {mileage}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Preço</h2>
        <select>
          {priceRange.map((price) => (
            <option
              key={price}
              value={price}
            >
              {price}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};
