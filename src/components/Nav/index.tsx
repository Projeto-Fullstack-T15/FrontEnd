import { useContext, useEffect } from 'react';
import { AnnouncementContext } from '../../contexts/announces/announcementContext';
import { FilterValue } from '../../hooks/filter.hook';
import { State } from '../../hooks/state.hook';
import ButtonComponents from '../Global/Buttons';
import { NavStyle } from './style';

const NavComponents = () => {
  const context = useContext(AnnouncementContext);
  const filterBrands = State<Array<string>>([]);
  const filterModels = State<Array<string>>([]);
  const filterColors = State<Array<string>>([]);
  const filterYears = State<Array<number>>([]);
  const filterFuelTypes = State<Array<string>>([]);
  const filterMileageMin = State<number>(context.mileageRangeMin.value);
  const filterMileageMax = State<number>(context.mileageRangeMax.value);
  const filterPriceMin = State<number>(context.priceRangeMin.value);
  const filterPriceMax = State<number>(context.priceRangeMax.value);

  useEffect(() => {
    context.filteredAnnouncements.set(
      context.announcements.value.filter((car) => {
        return (
          (filterBrands.value.length
            ? new FilterValue(filterBrands.value, car.brand, {
                exact: true,
              }).validate()
            : true) &&
          (filterModels.value.length
            ? new FilterValue(filterModels.value, car.model, {
                exact: true,
              }).validate()
            : true) &&
          (filterColors.value.length
            ? new FilterValue(filterColors.value, car.color, {
                exact: true,
              }).validate()
            : true) &&
          (filterYears.value.length
            ? new FilterValue(filterYears.value, car.year, {
                exact: true,
              }).validate()
            : true) &&
          (filterFuelTypes.value.length
            ? new FilterValue(filterFuelTypes.value, car.fuelType, {
                exact: true,
              }).validate()
            : true) &&
          car.mileage >= filterMileageMin.value &&
          car.mileage <= filterMileageMax.value &&
          car.price >= filterPriceMin.value &&
          car.mileage <= filterPriceMax.value
        );
      })
    );
  }, [
    filterBrands.value,
    filterModels.value,
    filterColors.value,
    filterYears.value,
    filterFuelTypes.value,
    filterMileageMin.value,
    filterMileageMax.value,
    filterPriceMin.value,
    filterPriceMax.value,
    context.announcements.value,
    context.filteredAnnouncements.value,
  ]);

  return (
    <NavStyle>
      <div className='content'>
        <div className='selectOptions'>
          <h2> Marca </h2>
          <ul>
            {context.brands.value.map((brand) => (
              <li key={brand}> {brand} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Modelo </h2>
          <ul>
            {context.models.value.map((model) => (
              <li key={model}> {model} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Cor </h2>
          <ul>
            {context.colors.value.map((color) => (
              <li key={color}> {color} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Ano </h2>
          <ul>
            {context.years.value.map((year) => (
              <li key={year}> {year} </li>
            ))}
          </ul>
        </div>
        <div className='selectOptions'>
          <h2> Combustível </h2>
          <ul>
            {context.fuelTypes.value.map((fuelType) => (
              <li key={fuelType}> {fuelType} </li>
            ))}
          </ul>
        </div>
        <div className='rangeOptions'>
          <h2> Km </h2>
          <span>
            <p> {context.mileageRangeMin.value} km </p>
            <p> {context.mileageRangeMax.value} km </p>
          </span>
          <div className='rangeInputs'>
            <input
              className='range-input-min'
              type='range'
              name='km'
              min={context.mileageRangeMin.value}
              max={context.mileageRangeMax.value / 2}
              step={
                (context.mileageRangeMax.value / 2 -
                  context.mileageRangeMin.value) /
                100
              }
              value={filterMileageMin.value}
              onChange={(e) => filterMileageMin.set(Number(e.target.value))}
            />
            <input
              className='range-input-max'
              type='range'
              name='km'
              min={context.mileageRangeMax.value / 2}
              max={context.mileageRangeMax.value}
              step={
                (context.mileageRangeMax.value -
                  context.mileageRangeMin.value / 2) /
                1000
              }
              value={filterMileageMax.value}
              onChange={(e) => filterMileageMax.set(Number(e.target.value))}
            />
          </div>
        </div>
        <div className='rangeOptions'>
          <h2> Preço </h2>
          <span>
            <p> R$ {String(context.priceRangeMin.value).slice(0, -3)} mil </p>
            <p> R$ {String(context.priceRangeMax.value).slice(0, -3)} mil </p>
          </span>
          <div className='rangeInputs'>
            <input
              className='range-input-min'
              type='range'
              name='price'
              min={context.priceRangeMin.value}
              max={context.priceRangeMax.value / 2}
              step={
                (context.priceRangeMax.value / 2 -
                  context.priceRangeMin.value) /
                1000
              }
              value={filterPriceMin.value}
              onChange={(e) => filterPriceMin.set(Number(e.target.value))}
            />
            <input
              type='range'
              className='range-input-max'
              name='price'
              min={context.priceRangeMax.value / 2}
              max={context.priceRangeMax.value}
              step={
                (context.priceRangeMax.value -
                  context.priceRangeMax.value / 2) /
                1000
              }
              value={filterPriceMax.value}
              onChange={(e) => filterPriceMax.set(Number(e.target.value))}
            />
          </div>
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
