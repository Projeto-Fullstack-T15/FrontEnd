import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonComponents from '../global/Buttons';
import { NavStyle } from './style';
import { ICar } from './interface';

const NavComponents = () => {
  // const { cars } = useCarContext(); TODO : USAR ESSA FORMA QUANDO O CONTEXTO ESTIVER PRONTO

  const [, setCars] = useState<ICar[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [mileageRange, setMileageRange] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/cars')
      .then((response) => {
        const carData: ICar[] = response.data;
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
        console.error('Erro ao buscar os carros:', error);
      });
  }, []);

  return (
    <NavStyle>
      <div className='content'>
        <div>
          <h2>Marca</h2>
          <ul>
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
          </ul>
        </div>
        <div>
          <h2>Modelo</h2>
          <ul>
            {models.map((model) => (
              <li key={model}>{model}</li>
            ))}
            <li>Civic</li>
            <li>Civic</li>
            <li>Civic</li>
            <li>Civic</li>
            <li>Civic</li>
          </ul>
        </div>
        <div>
          <h2>Cor</h2>
          <ul>
            {colors.map((color) => (
              <li key={color}>{color}</li>
            ))}
            <li>Preta</li>
            <li>Preta</li>
            <li>Preta</li>
            <li>Preta</li>
          </ul>
        </div>
        <div>
          <h2>Ano</h2>
          <ul>
            {years.map((year) => (
              <li key={year}>{year}</li>
            ))}
            <li>2019</li>
            <li>2019</li>
            <li>2019</li>
            <li>2019</li>
          </ul>
        </div>
        <div>
          <h2>Combustível</h2>
          <ul>
            {fuelTypes.map((fuelType) => (
              <li key={fuelType}>{fuelType}</li>
            ))}
            <li>Elétrico</li>
            <li>Elétrico</li>
            <li>Elétrico</li>
          </ul>
        </div>
        <div className='rangeOptions'>
          <h2>Km</h2>
          <span>
            <p>0 km</p>
            <p>650.000km</p>
          </span>
          <input type='range' name='km' min='0' max='650000' step='100' />
          {mileageRange.map((mileage) => (
            <option key={mileage} value={mileage}>
              {mileage}
            </option>
          ))}
        </div>
        <div className='rangeOptions'>
          <h2>Preço</h2>
          <span>
            <p>R$ 10 mil</p>
            <p>R$ 550 mil</p>
          </span>
          <input type='range' name='price' min='0' max='550000' step='10000' />
          {priceRange.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </div>
        <div className='navFooterButton'>
          <ButtonComponents
            {...{ $size: 'small', text: 'Limpar filtros', $type: 'brand1' }}
          />
        </div>
      </div>
    </NavStyle>
  );
};

export default NavComponents;
