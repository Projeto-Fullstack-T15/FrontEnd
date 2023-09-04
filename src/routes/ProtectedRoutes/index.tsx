import { Navigate, Outlet } from "react-router-dom";
import { UserProvider } from "../../contexts/user/userContext";

export function ProtectedRoutes() {
  const token = localStorage.getItem("@TOKEN")

  return (
    <UserProvider>
      {token ? <Outlet/> : <Navigate to='/'/>}
    </UserProvider>
  )
}
