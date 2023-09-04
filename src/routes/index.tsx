import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { AnnouncementProvider } from "../contexts/announces/announcementContext";
import { ProfileAdminPage } from "../pages/HomeProfileAdmin";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnnouncementProvider value={undefined}>
            <HomePage />
          </AnnouncementProvider>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profileadmin" element={<ProtectedRoutes />}>
        <Route index element={<ProfileAdminPage />} />
      </Route>
    </Routes>
  );
};
