import { ContextProvider } from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import { Register } from "./components/register/Register";
import Login from "./components/Login/Login";

import Solicitud from "./pages/SolucitudPrestamo";
import Investment from "./pages/Investment";
import Verification from "./components/register/verificationIdentity/Verification";
import DoneRegister from "./components/register/registerDone/DoneRegister";
import UserPanel from "./components/UserPanel/UserPanel";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/registrarme" element={<Register />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/userpanel" element={<UserPanel />} />

            <Route path="/prestamos" element={<Solicitud />} />

            <Route path="/inversiones" element={<Investment />} />
            <Route path="/verifi" element={<Verification />} />
            <Route path="/done-register" element={<DoneRegister />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
