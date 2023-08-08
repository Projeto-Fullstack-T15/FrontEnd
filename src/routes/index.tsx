import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/dashboard" element={< DashboardPage/>} />
        </Routes>        
    )
}