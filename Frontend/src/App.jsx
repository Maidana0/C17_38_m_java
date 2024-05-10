import { ContextProvider } from "./components/context/Context";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import Login from "./components/login/Login";

import RequestLoan from "./pages/RequestLoan";
import Investment from "./pages/Investment";
import UserPanel from "./components/userPanel/UserPanel";
import Register from "./pages/Register";

function App() {
  return (
    <ContextProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/registrarme" element={<Register />} />
            <Route exact path="/iniciar-sesion" element={<Login />} />
            <Route exact path="/userpanel" element={<UserPanel />} />

            <Route exact path="/prestamos" element={<RequestLoan />} />

            <Route exact path="/inversiones" element={<Investment />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ContextProvider>
  );
}

export default App;
