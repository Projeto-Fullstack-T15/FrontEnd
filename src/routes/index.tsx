import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { AnnouncementProvider } from "../contexts/announces/announcementContext";
import { ProfileAdminPage } from "../pages/HomeProfileAdmin";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <AnnouncementProvider value={undefined}>
            <HomePage />
          </AnnouncementProvider>
        }
      />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profileadmin" element={<ProfileAdminPage />} />
    </Routes>
  );
};
