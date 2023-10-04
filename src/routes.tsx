import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { RecoverPasswordPage } from "./pages/RecoverPassword/RecoverPasswordPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} index/>
            <Route path="/signup" element={<SignupPage/>} index/>
            <Route path="/recover" element={<RecoverPasswordPage/>} index/>
        </Routes>
    )
}
