import { AnnouncementProvider } from './contexts/announces/announcementContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './style/globalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AnnouncementProvider>
        <RoutesMain />
      </AnnouncementProvider>

    </>
  );
};
