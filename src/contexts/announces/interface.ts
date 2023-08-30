import { StateHook } from '../../hooks/state.hook';

export default interface Announcement {
  readonly id: number;
  readonly brand: string;
  readonly model: string;
  readonly color: string;
  readonly year: number;
  readonly fuelType: string;
  readonly mileage: number;
  readonly price: number;
  readonly description: string;
}

export interface AnnouncementContextProps {
  loadAnnouncements: () => void;
  updateAnnouncement: (id: number, data: Partial<Announcement>) => void;
  removeAnnouncement: (id: number) => void;
  createAnnouncement: (data: CreateAnnouncementRequest) => void;
  announcements: StateHook<Array<Announcement>>;
  filteredAnnouncements: StateHook<Array<Announcement>>;
  brands: StateHook<Array<string>>;
  models: StateHook<Array<string>>;
  colors: StateHook<Array<string>>;
  years: StateHook<Array<number>>;
  fuelTypes: StateHook<Array<string>>;
  mileageRangeMin: StateHook<number>;
  mileageRangeMax: StateHook<number>;
  priceRangeMin: StateHook<number>;
  priceRangeMax: StateHook<number>;
}

export interface CreateAnnouncementSchema {
  brand: string;
  model: string;
  color: string;
  year: number;
  fuel_type: string;
  mileage: number;
  price: number;
  description: string;
  cover_image: string;
}

export interface CreateAnnouncementRequest extends CreateAnnouncementSchema {
  images: string[];
}

export interface AnnouncementProviderProps {
  children: React.ReactNode;
}
