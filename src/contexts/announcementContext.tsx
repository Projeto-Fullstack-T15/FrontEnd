import { ProviderProps, createContext, useEffect } from "react";
import Announcement, { AnnouncementContextProps } from "../interfaces/announcement.interface";
import { State } from "../hooks/state.hook";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const AnnouncementContext = createContext({} as AnnouncementContextProps);

export const AnnouncementProvider = ({ children }: ProviderProps<AnnouncementContextProps>) => {
    const announcements = new State<Array<Announcement>>([]);

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

    return (
        <AnnouncementContext.Provider value={{
            announcements,
            loadAnnouncements,
            updateAnnouncement,
            removeAnnouncement,
        }}>
            {children}
        </AnnouncementContext.Provider>
    );
}