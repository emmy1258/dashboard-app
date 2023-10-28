import DashboardPage from "../views/DashboardPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

export default [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/Register",
        element: <RegisterPage />
    },
    {
        path: "/Dashboard",
        element: <DashboardPage />
    },
]