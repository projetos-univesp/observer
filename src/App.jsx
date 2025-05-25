import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CadClient from "./components/CadClient";
import Mensalistas from "./components/Mensalistas";
import Pagamento from "./components/pagamento";
import Pagamentos from "./components/Pagamentos";
import BuscarPlaca from "./components/BuscarPlaca";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadclient" element={<CadClient />} />
        <Route path="/mensalistas" element={<Mensalistas />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/buscaplaca" element={<BuscarPlaca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
