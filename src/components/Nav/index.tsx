import { useContext, useEffect } from 'react';
import { AnnouncementContext } from '../../contexts/announces/announcementContext';
import { FilterValue } from '../../hooks/filter.hook';
import { State } from '../../hooks/state.hook';
import ButtonComponents from '../Global/Buttons';
import { NavStyle } from './style';
import { AnnouncementFilters } from './interface';
import RangeInput from '../Global/RangeInput';

const NavComponents = () => {
  const { announcements, filteredAnnouncements } = useContext(AnnouncementContext);

  const filters = State<AnnouncementFilters>({
    brands: [],
    models: [],
    colors: [],
    years: [],
    fuelTypes: []
  });

  const maxMileage: number = Math.max(...announcements.value.map((car) => car.mileage));
  const maxPrice: number = Math.max(...announcements.value.map((car) => car.price));
  const filterMileage = State<{ min: number, max: number }>({ min: 0, max: maxMileage });
  const filterPrice = State<{ min: number, max: number }>({ min: 1000, max: maxPrice });

  useEffect(() => {
    filterMileage.set({ min: 0, max: maxMileage });
    filterPrice.set({ min: 1000, max: maxPrice })
  }, [maxMileage, maxPrice]);

  useEffect(() => {
    console.log("Filters: ", filters.value);
    filteredAnnouncements.set(
      announcements.value.filter((car) => {
        return (
          new FilterValue(filters.value.brands, car.brand).validate() &&
          new FilterValue(filters.value.models, car.model).validate() &&
          new FilterValue(filters.value.colors, car.color).validate() &&
          new FilterValue(filters.value.years, car.year).validate() &&
          new FilterValue(filters.value.fuelTypes, car.fuelType).validate() &&
          car.mileage >= filterMileage.value.min &&
          car.mileage <= filterMileage.value.max &&
          car.price >= filterPrice.value.min &&
          car.price <= filterPrice.value.max
        );
      })
    );
  }, [filters.value, announcements.value]);

  return (
    <NavStyle>
      <div className='content'>
        <div className='selectOptions'>
          <h2> Marca </h2>
          <ul>
            {[...new Set(announcements.value.map((car) => car.brand))].map((brand) => (
              <li key={brand}> {brand} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Modelo </h2>
          <ul>
            {[...new Set(announcements.value.map((car) => car.model))].map((model) => (
              <li key={model}> {model} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Cor </h2>
          <ul>
            {[...new Set(announcements.value.map((car) => car.color))].map((color) => (
              <li key={color}> {color} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Ano </h2>
          <ul>
            {[...new Set(announcements.value.map((car) => car.year))].map((year) => (
              <li key={year}> {year} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Combustível </h2>
          <ul>
            {[...new Set(announcements.value.map((car) => car.fuelType))].map((fuelType) => (
              <li key={fuelType}> {fuelType} </li>
            ))}
          </ul>
        </div>
        {
          maxMileage && maxMileage > 0 &&
          <div className='rangeOptions'>
            <h2> Km </h2>
            <span>
              <p> {filterMileage.value.min} km </p>
              <p> {filterMileage.value.max} km </p>
            </span>
            <RangeInput
              state={filterMileage}
              minValue={0}
              maxValue={maxMileage}
              step={1000}
            />
          </div>
        }
        {
          maxPrice && maxPrice > 0 &&
          <div className='rangeOptions'>
            <h2> Preço </h2>
            <span>
              <p> R$ {String(filterPrice.value.min).slice(0, -3)} mil </p>
              <p> R$ {String(filterPrice.value.max).slice(0, -3)} mil </p>
            </span>
            <RangeInput
              state={filterPrice}
              minValue={1000}
              maxValue={maxPrice}
              step={1000}
            />
          </div>
        }
        <div className='navFooterButton'>
          <ButtonComponents
            $size='small'
            text='Limpar filtros'
            $type='brand1'
            typeButton='button'
            onClick={filters.reset}
          />
        </div>
      </div>
    </NavStyle>
  );
};

export default NavComponents;
