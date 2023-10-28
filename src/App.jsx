import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Authentication from "./auth";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  
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
