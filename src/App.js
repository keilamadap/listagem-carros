import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListagemCarros from "./components/Listagem/ListagemCarros";
import Form from "./components/Carros/Form/Form";
import { NavProvider } from "./context/NavContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <NavProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ListagemCarros />} />
          <Route path="/novo" element={<Form />} />
        </Routes>
      </NavProvider>
    </Router>
  );
}

export default App;
