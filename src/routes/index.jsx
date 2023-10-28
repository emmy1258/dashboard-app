import AddProductPage from "../views/AddProductPage";
import DashboardPage from "../views/DashboardPage";
import LoginPage from "../views/LoginPage";
import NotFoundPage from "../views/NotFoundPage";
import RegisterPage from "../views/RegisterPage";

export default [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/Dashboard/add",
    element: <AddProductPage />,
  },
];
