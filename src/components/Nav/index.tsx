import { useContext, useEffect } from 'react';
import { AnnouncementContext } from '../../contexts/announces/announcementContext';
import { FilterValue } from '../../hooks/filter.hook';
import { State } from '../../hooks/state.hook';
import ButtonComponents from '../Global/Buttons';
import { NavStyle } from './style';
import { AnnouncementFilters } from './interface';

const NavComponents = () => {
  const { announcements, filteredAnnouncements } = useContext(AnnouncementContext);

  const minMileage: number = Math.min(...announcements.value.map((car) => car.mileage));
  const maxMileage: number = Math.max(...announcements.value.map((car) => car.mileage));
  const minPrice: number = Math.min(...announcements.value.map((car) => car.price));
  const maxPrice: number = Math.max(...announcements.value.map((car) => car.price));

  const filters = State<AnnouncementFilters>({
    brands: [],
    models: [],
    colors: [],
    years: [],
    fuelTypes: [],
    mileageRange: {
      min: minMileage,
      max: maxMileage,
    },
    priceRange: {
      min: minPrice,
      max: maxPrice,
    }
  });

  useEffect(() => {
    filteredAnnouncements.set(
      announcements.value.filter((car) => {
        return (
          new FilterValue(filters.value.brands, car.brand).validate() &&
          new FilterValue(filters.value.models, car.model).validate() &&
          new FilterValue(filters.value.colors, car.color).validate() &&
          new FilterValue(filters.value.years, car.year).validate() &&
          new FilterValue(filters.value.fuelTypes, car.fuelType).validate() &&
          car.mileage >= filters.value.mileageRange.min &&
          car.mileage <= filters.value.mileageRange.max &&
          car.price >= filters.value.priceRange.min &&
          car.price <= filters.value.priceRange.max
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
        <div className='rangeOptions'>
          <h2> Km </h2>
          <span>
            <p> {minMileage} km </p>
            <p> {maxMileage} km </p>
          </span>
          <div className='rangeInputs'>
            <input
              className='range-input-min'
              type='range'
              name='km'
              min={minMileage}
              max={maxMileage / 2}
              step={((maxMileage / 2) - minMileage) / 100}
              value={filters.value.mileageRange.min}
              onChange={(e) => filters.set((prev) => {
                return {
                  ...prev, mileageRange: {
                    ...prev.mileageRange, min: Number(e.target.value)
                  }
                }
              })}
            />
            <input
              className='range-input-max'
              type='range'
              name='km'
              min={maxMileage / 2}
              max={maxMileage}
              step={(maxMileage - (minMileage / 2)) / 100}
              value={filters.value.mileageRange.max}
              onChange={(e) => filters.set((prev) => {
                return {
                  ...prev, mileageRange: {
                    ...prev.mileageRange, max: Number(e.target.value)
                  }
                }
              })}
            />
          </div>
        </div>
        <div className='rangeOptions'>
          <h2> Preço </h2>
          <span>
            <p> R$ {String(minPrice).slice(0, -3)} mil </p>
            <p> R$ {String(maxPrice).slice(0, -3)} mil </p>
          </span>
          <div className='rangeInputs'>
            <input
              className='range-input-min'
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice / 2}
              step={((maxPrice / 2) - minPrice) / 100}
              value={filters.value.priceRange.min}
              onChange={(e) => filters.set((prev) => {
                return {
                  ...prev, priceRange: {
                    ...prev.priceRange, min: Number(e.target.value)
                  }
                }
              })}
            />
            <input
              type='range'
              className='range-input-max'
              name='price'
              min={maxPrice / 2}
              max={maxPrice}
              step={(maxPrice - (maxPrice / 2)) / 100}
              value={filters.value.mileageRange.min}
              onChange={(e) => filters.set((prev) => {
                return {
                  ...prev, priceRange: {
                    ...prev.priceRange, max: Number(e.target.value)
                  }
                }
              })}
            />
          </div>
        </div>
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
