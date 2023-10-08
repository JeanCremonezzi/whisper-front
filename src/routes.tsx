import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { RecoverPasswordPage } from "./pages/RecoverPassword/RecoverPasswordPage";
import { ChatPage } from "./pages/Chat/ChatPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} index/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/recover" element={<RecoverPasswordPage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
        </Routes>
    )
}
