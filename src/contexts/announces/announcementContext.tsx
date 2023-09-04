import { ProviderProps, createContext, useEffect } from "react";
import { toast } from "react-toastify";
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

    api.patch(updateRoute, data)
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao atualizar anúncio..."));
  }

  function removeAnnouncement(id: number): void {
    const deleteRoute = `/announcements/${id}`;

    api.delete(deleteRoute)
      .then(() => loadAnnouncements())
      .catch(() => toast.error("Falha ao remover anúncio..."));
  }

  function createAnnouncement(data: any): void {
    const createRoute = `/announcements`;

    api.post(createRoute, data)
      .then(() => loadAnnouncements())
      .catch(() => toast.error('Falha ao criar anúncio...'));
  }

  useEffect(() => {
    loadAnnouncements();
  }, []);

  useEffect(() => {
    console.log(announcements.value)
  }, [announcements.value]);

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        loadAnnouncements,
        updateAnnouncement,
        removeAnnouncement,
        createAnnouncement,
        filteredAnnouncements,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
