import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/home" element={< HomePage/>} />
            <Route path="/" element={< LoginPage/>} />
            <Route path="/register" element={< RegisterPage/>} />
        </Routes>        
    )
}