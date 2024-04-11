import { ContextProvider } from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { Register } from "./components/register/Register";
import Login from "./components/Login/Login";
import SolicitudPrestamo from "./components/PrestamoSoli/SolicitudPrestamo";
import ValidateDatePrest from "./components/ValidateDate/ValidateDatePrest";
<<<<<<< HEAD
import Solicitud from "./pages/SolucitudPrestamo";
=======
import Solicitud from "./pages/SolucitudPrestamo"
import ResumePrest from "./components/ConfirmPrest/ResumePrest";
import okPrest from "./components/EndPrest/Finalprest";


>>>>>>> 297677a944e9f16fca4c5a58f857883ccce275b4
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
<<<<<<< HEAD
            <Route path="/Validate-Date" element={<ValidateDatePrest />} />
            <Route path="/solicitud" element={<Solicitud />} />
=======
            <Route path="/Validate-Date" element={<ValidateDatePrest/>} />
            <Route path="/solicitud" element={<Solicitud/>} />
            <Route path="/Resume-prest" element={<ResumePrest/>} />
            <Route path="/okprest" element={<okPrest/>} />
>>>>>>> 297677a944e9f16fca4c5a58f857883ccce275b4
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
