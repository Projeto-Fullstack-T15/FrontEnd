import { State } from "../hooks/state.hook";

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
    announcements: State<Array<Announcement>>;
    filteredAnnouncements: State<Array<Announcement>>;
    brands: State<Array<string>>;
    models: State<Array<string>>;
    colors: State<Array<string>>;
    years: State<Array<number>>;
    fuelTypes: State<Array<string>>;
    mileageRangeMin: State<number>;
    mileageRangeMax: State<number>;
    priceRangeMin: State<number>;
    priceRangeMax: State<number>;
}