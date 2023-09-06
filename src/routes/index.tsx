import { Route, Routes } from "react-router-dom";
import { AnnouncementProvider } from "../contexts/announces/announcementContext";
import { AdsBySellerPage } from "../pages/AdsBySeller";
import DetailAnnouncement from "../pages/DetailAnnouncement";
import { HomePage } from "../pages/Home";
import { ProfileAdminPage } from "../pages/HomeProfileAdmin";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { SendEmailResetPasswordPage } from "../pages/ResetPassword";
import { ResetPasswordPage } from "../pages/ResetPassword/[token]";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AnnouncementProvider value={undefined}>
            <HomePage />
          </AnnouncementProvider>
        }
      />
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/register'
        element={<RegisterPage />}
      />
      <Route
        path='/sendEmail'
        element={<SendEmailResetPasswordPage />}
      />
      <Route
        path='/resetPassword/:token'
        element={<ResetPasswordPage />}
      />
      <Route
        path='/profileAdmin'
        element={<ProtectedRoutes />}
      >
        <Route
          index
          element={<ProfileAdminPage />}
        />
      </Route>
      <Route
        path='/adsbyseller/:id'
        element={<AdsBySellerPage />}
      />
      <Route
        path='product-detail'
        element={<DetailAnnouncement />}
      />
    </Routes>
  );
};
