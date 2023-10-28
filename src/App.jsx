import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Authentication from "./auth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Authentication.Provider value={[isAuth, setIsAuth]}>
      <ToastContainer theme="colored" />
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </Authentication.Provider>
  );
}
