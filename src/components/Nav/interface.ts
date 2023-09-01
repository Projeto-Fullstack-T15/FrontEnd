export interface ICar {
  ID: number;
  Brand: string;
  Model: string;
  Color: string;
  Year: number;
  FuelType: string;
  Mileage: number;
  Price: number;
}

export interface AnnouncementFilters {
  brands: Array<string>;
  models: Array<string>;
  colors: Array<string>;
  years: Array<number>;
  fuelTypes: Array<string>;
  mileageRange: {
    min: number;
    max: number;
  }
  priceRange: {
    min: number;
    max: number;
  }
}