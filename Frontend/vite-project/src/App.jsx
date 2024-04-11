import { ContextProvider } from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import { Register } from "./components/register/Register";
<<<<<<< HEAD
import Login from "./components/Login/Login";
import SolicitudPrestamo from "./components/PrestamoSoli/SolicitudPrestamo";
import ValidateDatePrest from "./components/ValidateDate/ValidateDatePrest";
import Solicitud from "./pages/SolucitudPrestamo";
=======
import Login from "./components/Login/Login"

import Solicitud from "./pages/SolucitudPrestamo"
import Investment from "./pages/Investment";

/* 
*/

>>>>>>> e5e963b7f3eba3718944123114f6a3801b6c28c7
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/register" element={<Register />} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Validate-Date" element={<ValidateDatePrest />} />
            <Route path="/solicitud" element={<Solicitud />} />
=======
            <Route path="/registrarme" element={<Register />} />
            <Route path="/iniciar-sesion" element={<Login />} />

            <Route path="/prestamos" element={<Solicitud />} />

            <Route path="/inversiones" element={<Investment />} />
>>>>>>> e5e963b7f3eba3718944123114f6a3801b6c28c7
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
