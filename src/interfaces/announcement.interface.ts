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
    announcements: State<Array<Announcement>>;
    loadAnnouncements: () => void;
    updateAnnouncement: (id: number, data: Partial<Announcement>) => void;
    removeAnnouncement: (id: number) => void;
}