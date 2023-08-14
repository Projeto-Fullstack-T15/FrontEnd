import { ProviderProps, createContext, useEffect } from "react";
import Announcement, { AnnouncementContextProps } from "../interfaces/announcement.interface";
import { State } from "../hooks/state.hook";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const AnnouncementContext = createContext({} as AnnouncementContextProps);

export const AnnouncementProvider = ({ children }: ProviderProps<AnnouncementContextProps>) => {
    const announcements = new State<Array<Announcement>>([]);
    const filteredAnnouncements = new State<Array<Announcement>>([]);
    const brands = new State<Array<string>>([]);
    const models = new State<Array<string>>([]);
    const colors = new State<Array<string>>([]);
    const years = new State<Array<number>>([]);
    const fuelTypes = new State<Array<string>>([]);
    const mileageRangeMin = new State<number>(0);
    const mileageRangeMax = new State<number>(0);
    const priceRangeMin = new State<number>(0);
    const priceRangeMax = new State<number>(0);

    function loadAnnouncements() {
        const listRoute = `/announcements`;
        Api.get<Array<Announcement>>(listRoute)
            .then((res) => announcements.set(res.data))
            .catch(() => toast.error("Falha ao carregar anúncios..."));
    }

    function updateAnnouncement(id: number, data: Partial<Announcement>): void {
        const updateRoute = `/announcements/${id}`;

        Api.patch(updateRoute, data)
            .then(() => loadAnnouncements())
            .catch(() => toast.error("Falha ao atualizar anúncio..."));
    }

    function removeAnnouncement(id: number): void {
        const deleteRoute = `/announcements/${id}`;

        Api.delete(deleteRoute)
            .then(() => loadAnnouncements())
            .catch(() => toast.error("Falha ao remover anúncio..."));
    }

    useEffect(() => { loadAnnouncements() }, []);
    useEffect(() => {
        brands.set([...new Set(announcements.value.map((car) => car.brand))]);
        models.set([...new Set(announcements.value.map((car) => car.model))]);
        colors.set([...new Set(announcements.value.map((car) => car.color))]);
        years.set([...new Set(announcements.value.map((car) => car.year))]);
        fuelTypes.set([...new Set(announcements.value.map((car) => car.fuelType))]);

        const carMileages = [...announcements.value.map((car) => car.mileage)];
        mileageRangeMin.set(Math.min(...carMileages));
        mileageRangeMax.set(Math.max(...carMileages));

        const carPrices = [...announcements.value.map((car) => car.price)];
        priceRangeMin.set(Math.min(...carPrices));
        priceRangeMax.set(Math.max(...carPrices));
    }, [announcements.value]);

    return (
        <AnnouncementContext.Provider value={{
            announcements,
            loadAnnouncements,
            updateAnnouncement,
            removeAnnouncement,
            filteredAnnouncements,
            brands,
            models,
            colors,
            years,
            fuelTypes,
            mileageRangeMin,
            mileageRangeMax,
            priceRangeMin,
            priceRangeMax,
        }}>
            {children}
        </AnnouncementContext.Provider>
    );
}