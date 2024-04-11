import { ContextProvider } from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import { Register } from "./components/register/Register";

import Login from "./components/Login/Login";
import SolicitudPrestamo from "./components/PrestamoSoli/SolicitudPrestamo";
import ValidateDatePrest from "./components/ValidateDate/ValidateDatePrest";
import Solicitud from "./pages/SolucitudPrestamo";
import Investment from "./pages/Investment";


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Validate-Date" element={<ValidateDatePrest />} />
            <Route path="/solicitud" element={<Solicitud />} />
            <Route path="/registrarme" element={<Register />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/prestamos" element={<Solicitud />} />
            <Route path="/inversiones" element={<Investment />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
