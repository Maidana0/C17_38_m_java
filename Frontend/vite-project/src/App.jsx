import { ContextProvider } from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { Register } from "./components/register/Register";
import SolicitudPrestamo from "./components/PrestamoSoli/SolicitudPrestamo";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/solicitud-prestamo" element={<SolicitudPrestamo />} />
            
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
