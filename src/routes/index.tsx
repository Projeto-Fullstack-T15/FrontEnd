import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import { AnnouncementProvider } from '../contexts/announcementContext';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path='/home'
        element={
          <AnnouncementProvider>
            <HomePage />
          </AnnouncementProvider>
        }
      />
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
