import { StateHook } from '../../hooks/state.hook';
import { AccountWithUser } from '../user/interfaces';

export default interface Announcement {
  id: number;
  is_active: boolean;
  brand: string;
  model: string;
  color: string;
  year: number;
  fuel_type: string;
  mileage: number;
  price: number;
  fipe_price: number;
  description: string;
  cover_image: string;
  account_id: number;
  created_at: string;
  last_updated_at: string;
  account: AccountWithUser;
  gallery_images: GalleryImages[];
}

interface GalleryImages {
  id: number;
  url: string;
}

export interface AnnouncementContextProps {
  loadAnnouncements: () => void;
  updateAnnouncement: (id: number, data: Partial<Announcement>) => void;
  removeAnnouncement: (id: number) => void;
  createAnnouncement: (data: any) => void;
  announcements: StateHook<Array<Announcement>>;
  filteredAnnouncements: StateHook<Array<Announcement>>;
  cars: StateHook<CarsResponse>;
}

export interface AnnouncementProviderProps {
  children: React.ReactNode;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export type BrandCarsResponse = Array<Car>;

export type CarName = Pick<Car, 'name'>;

export interface CarsResponse {
  [brand: string]: Array<CarName>;
}
