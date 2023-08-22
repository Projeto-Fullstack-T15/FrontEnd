import { ProviderProps, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { State } from "../../hooks/state.hook";
import { api } from "../../services/api";
import Announcement, { AnnouncementContextProps } from "./interface";

export const AnnouncementContext = createContext(
  {} as AnnouncementContextProps
);

export const AnnouncementProvider = ({
  children,
}: ProviderProps<AnnouncementContextProps>) => {
  const announcements = State<Array<Announcement>>([]);
  const filteredAnnouncements = State<Array<Announcement>>([]);
  const brands = State<Array<string>>([]);
  const models = State<Array<string>>([]);
  const colors = State<Array<string>>([]);
  const years = State<Array<number>>([]);
  const fuelTypes = State<Array<string>>([]);
  const mileageRangeMin = State<number>(0);
  const mileageRangeMax = State<number>(0);
  const priceRangeMin = State<number>(0);
  const priceRangeMax = State<number>(0);

  function loadAnnouncements() {
    const listRoute = `/announcements`;
    api
      .get<Array<Announcement>>(listRoute)
      .then((res) => announcements.set(res.data))
      .catch(() => toast.error("Falha ao carregar anúncios..."));
  }

  function updateAnnouncement(id: number, data: Partial<Announcement>): void {
    const updateRoute = `/announcements/${id}`;

    api
      .patch(updateRoute, data)
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao atualizar anúncio..."));
  }

  function removeAnnouncement(id: number): void {
    const deleteRoute = `/announcements/${id}`;

    api
      .delete(deleteRoute)
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao remover anúncio..."));
  }

  useEffect(() => {
    loadAnnouncements();
  }, []);
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
    <AnnouncementContext.Provider
      value={{
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
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
