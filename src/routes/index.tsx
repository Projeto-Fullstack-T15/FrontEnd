import { Route, Routes } from 'react-router-dom';
import { AnnouncementProvider } from '../contexts/announces/announcementContext';
import { AdsBySellerPage } from '../pages/AdsBySeller';
import { HomePage } from '../pages/Home';
import { ProfileAdminPage } from '../pages/HomeProfileAdmin';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import { ProtectedRoutes } from './ProtectedRoutes';
import DetailAnnouncement from '../pages/DetailAnnouncement';

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
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profileadmin' element={<ProtectedRoutes />}>
        <Route index element={<ProfileAdminPage />} />
      </Route>
      <Route path='/adsbyseller' element={<AdsBySellerPage />} />
      <Route path='product-detail' element={<DetailAnnouncement />} />
    </Routes>
  );
};
