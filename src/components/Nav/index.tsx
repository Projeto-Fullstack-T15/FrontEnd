import { useContext, useEffect } from "react";
import ButtonComponents from "../global/Buttons";
import { NavStyle } from "./style";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { State } from "../../hooks/state.hook";
import { FilterValue } from "../../hooks/filter.hook";

export const Nav = () => {
	const context = useContext(AnnouncementContext);

	const filterBrands = new State<Array<string>>([]);
	const filterModels = new State<Array<string>>([]);
	const filterColors = new State<Array<string>>([]);
	const filterYears = new State<Array<number>>([]);
	const filterFuelTypes = new State<Array<string>>([]);
	const filterMileageMin = new State<number>(context.mileageRangeMin.value);
	const filterMileageMax = new State<number>(context.mileageRangeMax.value);
	const filterPriceMin = new State<number>(context.priceRangeMin.value);
	const filterPriceMax = new State<number>(context.priceRangeMax.value);

	useEffect(() => {
		context.filteredAnnouncements.set(context.announcements.value.filter((car) => {
			return (
				(filterBrands.value.length ? new FilterValue(filterBrands.value, car.brand, { exact: true }) : true) &&
				(filterModels.value.length ? new FilterValue(filterModels.value, car.model, { exact: true }) : true) &&
				(filterColors.value.length ? new FilterValue(filterColors.value, car.color, { exact: true }) : true) &&
				(filterYears.value.length ? new FilterValue(filterYears.value, car.year, { exact: true }) : true) &&
				(filterFuelTypes.value.length ? new FilterValue(filterFuelTypes.value, car.fuelType, { exact: true }) : true) &&
				(car.mileage >= filterMileageMin.value && car.mileage <= filterMileageMax.value) &&
				(car.price >= filterPriceMin.value && car.mileage <= filterPriceMax.value)
			)
		}));
	}, [
		filterBrands.value,
		filterModels.value,
		filterColors.value,
		filterYears.value,
		filterFuelTypes.value,
		filterMileageMin.value,
		filterMileageMax.value,
		filterPriceMin.value,
		filterPriceMax.value
	]);

	return (
		<NavStyle>
			<div className="content">
				<div>
					<h2> Marca </h2>
					<ul>
						{
							context.brands.value.map((brand) => <li key={brand}> {brand} </li>)
						}
					</ul>
				</div>
				<div>
					<h2> Modelo </h2>
					<ul>
						{
							context.models.value.map((model) => <li key={model}> {model} </li>)
						}
					</ul>
				</div>
				<div>
					<h2> Cor </h2>
					<ul>
						{
							context.colors.value.map((color) => <li key={color}> {color} </li>)
						}
					</ul>
				</div>
				<div>
					<h2> Ano </h2>
					<ul>
						{
							context.years.value.map((year) => <li key={year}> {year} </li>)
						}
					</ul>
				</div>
				<div>
					<h2> Combustível </h2>
					<ul>
						{
							context.fuelTypes.value.map((fuelType) => <li key={fuelType}> {fuelType} </li>)
						}
					</ul>
				</div>
				<div className="rangeOptions">
					<h2> Km </h2>
					<span>
						<p> {context.mileageRangeMin.value} km </p>
						<p> {context.mileageRangeMax.value} km </p>
					</span>
					<input
						type="range"
						name="km"
						min={context.mileageRangeMin.value}
						max={context.mileageRangeMax.value}
						step="100"
						value={filterMileageMax.value}
						onChange={(e) => filterMileageMax.set(Number(e.target.value))}
					/>
				</div>
				<div className="rangeOptions">
					<h2> Preço </h2>
					<span>
						<p> R$ {String(context.priceRangeMin.value).slice(0, -3)} mil </p>
						<p> R$ {String(context.priceRangeMax.value).slice(0, -3)} mil </p>
					</span>
					<input
						type="range"
						name="price"
						min={context.priceRangeMin.value}
						max={context.priceRangeMax.value}
						step={(context.priceRangeMax.value - context.priceRangeMin.value) / 1000}
						value={filterPriceMax.value}
						onChange={(e) => filterPriceMax.set(Number(e.target.value))}
					/>
				</div>
				<div className="navFooterButton">
					<ButtonComponents
						{...{ $size: "small", text: "Limpar filtros", $type: "brand1" }}
					/>
				</div>
			</div>
		</NavStyle>
	);
};
