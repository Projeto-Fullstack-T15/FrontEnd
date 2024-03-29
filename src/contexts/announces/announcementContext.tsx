import { ProviderProps, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { State } from "../../hooks/state.hook";
import { api, carsApi } from "../../services/api";
import Announcement, { AnnouncementContextProps, CarsResponse } from "./interface";

export const AnnouncementContext = createContext(
  {} as AnnouncementContextProps
);

export const AnnouncementProvider = ({
  children,
}: ProviderProps<AnnouncementContextProps>) => {
  const announcements = State<Array<Announcement>>([]);
  const filteredAnnouncements = State<Array<Announcement>>([]);

  const cars = State<CarsResponse>({});

  const headerWithToken = () => {
    const token = localStorage.getItem("@TOKEN");
    return {
      headers: { authorization: `Bearer ${token}` }
    }
  }

  function loadAnnouncements() {
    const listRoute = `/announcements`;

    api.get<Array<Announcement>>(listRoute)
      .then((res) => {
        announcements.set(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Falha ao carregar anúncios...");
      });
  }

  function updateAnnouncement(id: number, data: Partial<Announcement>): void {
    const updateRoute = `/announcements/${id}`;

    api.patch(updateRoute, data, headerWithToken())
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao atualizar anúncio..."));
  }

  function removeAnnouncement(id: number): void {
    const deleteRoute = `/announcements/${id}`;

    api.delete(deleteRoute, headerWithToken())
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao remover anúncio..."));
  }

  function createAnnouncement(data: any): void {
    const createRoute = `/announcements`;

    api.post(createRoute, data, headerWithToken())
      .then(() => loadAnnouncements())
      .catch((err) => {
        console.error(err);
        toast.error('Falha ao criar anúncio...')
      });
  }

  function loadCars() {
    carsApi.get<CarsResponse>('/cars')
      .then((res) => cars.set(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    loadAnnouncements();
    loadCars();
  }, []);

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        loadAnnouncements,
        updateAnnouncement,
        removeAnnouncement,
        createAnnouncement,
        filteredAnnouncements,
        cars
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
