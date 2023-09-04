import { Route, Routes } from "react-router-dom";
import { AnnouncementProvider } from "../contexts/announces/announcementContext";
import { AdsBySellerPage } from "../pages/AdsBySeller";
import { HomePage } from "../pages/Home";
import { ProfileAdminPage } from "../pages/HomeProfileAdmin";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path='/home'
        element={
          <AnnouncementProvider value={undefined}>
            <HomePage />
          </AnnouncementProvider>
        }
      />
      <Route
        path='/'
        element={<LoginPage />}
      />
      <Route
        path='/register'
        element={<RegisterPage />}
      />
      <Route
        path='/profileadmin'
        element={<ProfileAdminPage />}
      />
      <Route
        path='/adsbyseller'
        element={<AdsBySellerPage />}
      />
    </Routes>
  );
};
