import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/globalStyle";
import { UserProvider } from "./contexts/user/userContext";

export const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserProvider>
  );
};
